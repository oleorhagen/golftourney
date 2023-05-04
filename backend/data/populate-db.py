#
# Populate the database from the given data-files in this repository
#

from collections import namedtuple

from python_graphql_client import GraphqlClient


# Instantiate the client with an endpoint.
client = GraphqlClient(endpoint="http://localhost:5433/graphql")

# Asynchronous request
import asyncio

Person = namedtuple("Person", "name, id")

PLAYERS = (
    Person(name= "Juliane", id= 2),
    Person(name= "Marius", id= 3),
    Person(name= "Ole P", id= 1),
    Person(name= "Ole M", id= 4),
)

Course = namedtuple("Course", "name, csv_file")

COURSES = (
    Course(name= "gamle fredrikstad", csv_file= "gamle-fredrikstad.csv"),
    Course(name= "skjeberg", csv_file= "skjeberg.csv"),
    Course(name= "borregaard", csv_file= "borregaard.csv"),
    Course(name= "onsoy", csv_file= "onsoy.csv"),
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
        print(data)  # => {'data': {'country': {'code': 'CA', 'name': 'Canada'}}}


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
        print(data)  # => {'data': {'country': {'code': 'CA', 'name': 'Canada'}}}


def populate_holes(courses):
    import csv

    for idx, course in enumerate(courses):

        with open(course.csv_file, mode="r") as f:
            # reading the CSV file
            csvFile = csv.reader(f)

            # displaying the contents of the CSV file
            nr = 1 # Hole number
            for lines in csvFile:
                if lines:
                    print(lines)
                    par, index = lines[0], lines[1]
                    query = """
    mutation createHole($courseID: BigInt!, $nr: BigInt!, $index: BigInt!, $par: BigInt!) {
    createHole(input: {hole: {nr: $nr, index: $index, courseId: $courseID, par: $par}}) {
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
                        "courseID": idx,
                        "nr": nr,
                        "index": index,
                        "par": par,
                    }

                    data = client.execute(query=query, variables=variables)
                    print(
                        data
                    )  # => {'data': {'country': {'code': 'CA', 'name': 'Canada'}}}
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
