import { graphql, ExecutionResult } from "graphql";
import schema from "./schema";
import { IncomingMessage, ServerResponse } from "http";

export default async function handle(
  req: IncomingMessage & {
    body: { query: string; variables?: { test?: boolean } };
  },
  res: ServerResponse
) {
  const { query, variables } = req.body;

  graphql(
    schema,
    query,
    null,
    null,
    variables
  )
    .then(result => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(attachErrorCodes(result)));
    })
    .catch(err => {
      console.error(err);

      res.statusCode = 500;
      res.end();
    });
}

function attachErrorCodes(result: ExecutionResult) {
  if (!result.errors || !result.errors.length) {
    return result;
  }

  return {
    ...result,
    errors: result.errors.map(error => ({
      ...error,
      errorCode: error.message.split(" ")[0],
    })),
  };
}
