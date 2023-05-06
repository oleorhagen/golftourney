#
# Populate the database from the given data-files in this repository
#

from collections import namedtuple

from python_graphql_client import GraphqlClient


# Instantiate the client with an endpoint.
client = GraphqlClient(endpoint="http://localhost:5433/graphql")

# Asynchronous request
import asyncio


class Person:
    def __init__(self, name):
        self.name = name
        self.id = None


class Course:
    def __init__(self, name, csv_file):
        self.name = name
        self.csv_file = csv_file
        self.id = None


PLAYERS = (
    Person(name="Juliane"),
    Person(name="Marius"),
    Person(name="Ole P"),
    Person(name="Ole M"),
)

COURSES = (
    Course(name="gamle fredrikstad", csv_file="gamle-fredrikstad.csv"),
    Course(name="skjeberg", csv_file="skjeberg.csv"),
    Course(name="borregaard", csv_file="borregaard.csv"),
    Course(name="onsoy", csv_file="onsoy.csv"),
)


def populate_players(players):
    for player in players:
        query = """
    mutation PlayerCreation($playa: String!) {
    createPlayer(input: { player: { name: $playa } }) {
        player {
        id
        name
        }
    }
    }
        """
        variables = {"playa": player.name}
        data = client.execute(query=query, variables=variables)
        print(f"Created player: {data}")
        # {'data': {'createPlayer': {'player': {'id': '1', 'name': 'Juliane'}}}}
        player.id = data["data"]["createPlayer"]["player"]["id"]
        print(player)


def populate_courses(courses):
    for course in courses:
        query = """
mutation createCourse($name: String!) {
  createCourse(input: {course: {name: $name}}) {
    course {
      id
      name
    }
  }
}
        """
        variables = {"name": course.name}
        data = client.execute(query=query, variables=variables)
        print(f"Populate courses received: {data}")
        course.id = data["data"]["createCourse"]["course"]["id"]
        print(course)


def populate_holes(courses):
    print("Populating the holes")
    import csv

    for idx, course in enumerate(courses):

        with open(course.csv_file, mode="r") as f:
            # reading the CSV file
            csvFile = csv.reader(f)

            # displaying the contents of the CSV file
            nr = 1  # Hole number
            for lines in csvFile:
                if lines:
                    print(lines)
                    par, index = lines[0], lines[1]
                    query = """
mutation createHole($courseId: UUID!, $nr: BigInt!, $index: BigInt!, $par: BigInt!) {
  createHole(
    input: { hole: { nr: $nr, index: $index, courseId: $courseId, par: $par } }
  ) {
    hole {
      id
      nr
      index
      par
    }
  }
}
                    """
                    variables = {
                        "courseId": course.id,
                        "nr": nr,
                        "index": index,
                        "par": par,
                    }

                    data = client.execute(query=query, variables=variables)
                    print(f"populate holes data: {data}")
                    nr += 1


# def populate_scores(players, courses):

#     # for player in players:
#     for player in players:
#         for course in courses:
#             for hole_number in range(1, 18 + 1):

#                 query = """
#                     mutation createScore($courseId: BigInt!, $holeId: BigInt!, $strokes: BigInt!, $points: BigInt!, $playerId: BigInt!) {
#                     createScore(
#                         input: {score: {strokes: $strokes, points: $points, courseId: $courseId, holeId: $holeId, playerId: $playerId}}
#                     ) {
#                         clientMutationId
#                         score {
#                             nodeId
#                             id
#                             strokes
#                             points
#                         }
#                     }
#                     }
#                 """

#                 variables = {
#                     "courseID": 1,  # TODO - Set the correct course ID
#                     "strokes": 0,
#                     "points": 0,
#                     "playerId": 1,  # TODO - retrieve
#                     "courseId": 1,  # TODO - retrieve
#                     "holeId": hole_number,
#                 }

#                 data = client.execute(query=query, variables=variables)
#                 print(
#                     data
#                 )  # => {'data': {'country': {'code': 'CA', 'name': 'Canada'}}}


populate_players(players=PLAYERS)
populate_courses(courses=COURSES)
populate_holes(courses=COURSES)
# populate_scores(players=PLAYERS, courses=COURSES)
