#
# Populate the database from the given data-files in this repository
#

from python_graphql_client import GraphqlClient

# Instantiate the client with an endpoint.
client = GraphqlClient(endpoint="http://localhost:5433/graphql")

# Asynchronous request
import asyncio

PLAYERS = ("Juliane", "Marius", "Ole P", "Ole M")
COURSES = ("gamle fredrikstad", "skjeberg", "borregaard", "onsoy")


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
        variables = {"playa": player}
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
        variables = {"name": course}
        data = client.execute(query=query, variables=variables)
        print(data)  # => {'data': {'country': {'code': 'CA', 'name': 'Canada'}}}


def populate_holes(filename):
    import csv

    with open(filename, mode="r") as f:
        # reading the CSV file
        csvFile = csv.reader(f)

        # displaying the contents of the CSV file
        nr = 1
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
                    "courseID": 1,  # TODO - Set the correct course ID
                    "nr": nr,
                    "index": index,
                    "par": par,
                }

                data = client.execute(query=query, variables=variables)
                print(
                    data
                )  # => {'data': {'country': {'code': 'CA', 'name': 'Canada'}}}
                nr += 1


def populate_scores(players, courses):

    # for player in players:
    for player in [1]:
        for course in [1]:
            for hole_number in range(1,18+1):

                query = """
                    mutation createScore($courseId: BigInt!, $holeId: BigInt!, $strokes: BigInt!, $points: BigInt!, $playerId: BigInt!) {
                    createScore(
                        input: {score: {strokes: $strokes, points: $points, courseId: $courseId, holeId: $holeId, playerId: $playerId}}
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

                variables = {
                    "courseID": 1,  # TODO - Set the correct course ID
                    "strokes": 0,
                    "points": 0,
                    "playerId": 1, # TODO - retrieve
                    "courseId": 1, # TODO - retrieve
                    "holeId": hole_number
                }

                data = client.execute(query=query, variables=variables)
                print(data)  # => {'data': {'country': {'code': 'CA', 'name': 'Canada'}}}


populate_players(players=PLAYERS)
populate_courses(courses=COURSES)
populate_holes(filename="gamle-fredrikstad.csv")
populate_scores(players=PLAYERS, courses=COURSES)
