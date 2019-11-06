import GraphiQL from "graphiql";
import fetch from "isomorphic-unfetch";
import localStorage from "localStorage";
import "graphiql/graphiql.css";

const isServer = () => typeof window === `undefined`;

const GraphiQLPage = () =>
  isServer() ? null : (
    <div style={{ width: "100%", height: "100vh" }}>
      <GraphiQL
        editorTheme="solarized light"
        fetcher={graphQLFetcher}
        storage={localStorage}
      />
    </div>
  );

function graphQLFetcher(graphQLParams) {
  return fetch("/api/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

export default GraphiQLPage;
