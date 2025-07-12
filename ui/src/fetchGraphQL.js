// your-app-name/src/fetchGraphQL.js
async function fetchGraphQL(text, variables) {
    const GRAPHQL_ENDPOINT = process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://localhost:8080/query';

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      // Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
