import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";

import { buildSchema, Resolver, Query, Arg, ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Location {
  @Field(() => ID)
  name?: string;
  type?: string;
  dimension?: string;
  residents?: string[];
  url?: string;
  created?: string;
}

@ObjectType()
export class Character {
  @Field(() => ID)
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: Location;
  location?: Location;
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
}

@Resolver()
export class CharacterResolver {
  @Query(() => Character)
  async character(@Arg("id") id: number): Promise<Character> {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const character = await res.json();
    return character;
  }
}

const schema = await buildSchema({
  resolvers: [CharacterResolver],
});

const server = new ApolloServer({
  schema
});
const startServer = server.start();

export const config = {
  api: {
    bodyParser: false,
  }
};

export async function GET(req: MicroRequest, res: ServerResponse) {
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}