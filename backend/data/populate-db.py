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
    def __init__(self, name, id):
        self.name = name
        self.id = id


class Course:
    def __init__(self, name, csv_file):
        self.name = name
        self.csv_file = csv_file
        self.id = None


class Hole:
    def __init__(self, dict_):
        self.id = dict_["id"]
        self.nr = dict_["nr"]
        self.index = dict_["index"]
        self.par = dict_["par"]


PLAYERS = (
    # Person(name="Juliane", id="626fa9fd-95ed-40e8-90f3-139ec79e79b9"),
    # Person(name="Marius", id="626fa9fd-95ed-40e8-90f3-139ec79e79b9"),
    Person(name="Ole P", id="626fa9fd-95ed-40e8-90f3-139ec79e79b9"),
    # Person(name="Ole M", id="626fa9fd-95ed-40e8-90f3-139ec79e79b9"),
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
mutation PlayerCreation($playa: String!, $id: UUID) {
  createPlayer(input: { player: { name: $playa, id: $id } }) {
    player {
      id
      name
    }
  }
}
        """
        variables = {"playa": player.name, "id": player.id}
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


score_query = """
mutation createScore(
  $courseId: UUID!
  $holeId: UUID!
  $strokes: BigInt!
  $points: BigInt!
  $playerId: UUID!
) {
  createScore(
    input: {
      score: {
        strokes: $strokes
        points: $points
        courseId: $courseId
        holeId: $holeId
        playerId: $playerId
      }
    }
  ) {
    clientMutationId
    score {
      nodeId
      id
      strokes
      points
    }
  }
}
                """


def populate_holes(courses, players):
    print("Populating the holes")
    import csv

    holes = []

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
                    hole = Hole(data["data"]["createHole"]["hole"])
                    holes.append(hole)
                    for player in players:
                        # Create the initial empty score
                        variables = {
                            "courseId": course.id,
                            "holeId": hole.id,
                            "strokes": "0",
                            "points": "0",
                            "playerId": player.id,
                        }
                        data = client.execute(query=score_query, variables=variables)
                        print(f"Created scores: {data}")

    return holes


populate_players(players=PLAYERS)
populate_courses(courses=COURSES)
HOLES = populate_holes(courses=COURSES, players=PLAYERS)
print(HOLES)
