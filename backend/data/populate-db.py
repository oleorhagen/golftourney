#
# Populate the database from the given data-files in this repository
#

from python_graphql_client import GraphqlClient

# Instantiate the client with an endpoint.
client = GraphqlClient(endpoint="http://localhost:5433/graphql")

# Asynchronous request
import asyncio


def populate_players():
    for player in ("Juliane", "Marius", "Ole P", "Ole M"):
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
        variables={"playa": player}
        data = client.execute(query=query, variables=variables)
        print(data)  # => {'data': {'country': {'code': 'CA', 'name': 'Canada'}}}

def populate_courses():
    for course in ("gamle fredrikstad", "skjeberg", "borregaard", "onsoy"):
        query = """
mutation createCourse($name: String!) {
  createCourse(input: {course: {courseName: $name}}) {
    course {
      id
      courseName
    }
  }
}
        """
        variables={"name": course}
        data = client.execute(query=query, variables=variables)
        print(data)  # => {'data': {'country': {'code': 'CA', 'name': 'Canada'}}}

def populate_holes():
    import csv
    with open('gamle-fredrikstad.csv', mode="r") as f:
        # reading the CSV file
        csvFile = csv.reader(f)

        # displaying the contents of the CSV file
        for lines in csvFile:
            if lines:
                print(lines)
                nr, index = lines[0], lines[1]
                query = """
mutation createHole($courseID: BigInt!, $nr: BigInt!, $index: BigInt!) {
  createHole(input: {hole: {nr: $nr, index: $index, courseId: $courseID}}) {
    hole {
      id
      nr
      index
    }
  }
}
                """
                variables = {
                    "courseID": 1,
                    "nr": nr,
                    "index": index
                }

                data = client.execute(query=query, variables=variables)
                print(data)  # => {'data': {'country': {'code': 'CA', 'name': 'Canada'}}}

# populate_players()
# populate_courses()
populate_holes()
