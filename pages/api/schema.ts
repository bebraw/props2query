import { schemaComposer } from "graphql-compose";

schemaComposer.createObjectTC({
  name: "Note",
  fields: {
    id: "ID!",
    title: "String!",
    description: "String!",
  },
});

schemaComposer.Query.addFields({
  notes: {
    type: "[Note]",
    args: {},
    resolve: () => [{ id: "123", title: "Title", description: "Description" }],
  },
});

export default schemaComposer.buildSchema();
