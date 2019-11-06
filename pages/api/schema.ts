import { schemaComposer } from "graphql-compose"

const CityTC = schemaComposer.createObjectTC(`
  type City {
    code: String!
    name: String!
    population: Number
    countryCode: String
    tz: String
  }
`);

const CountryTC = schemaComposer.createObjectTC({
  name: 'Country',
  fields: {
    title: 'String',
    geo: `type LonLat { lon: Float, lat: Float }`,
  }
});

CityTC.addFields({
  country: CountryTC
});

export default schemaComposer.buildSchema();