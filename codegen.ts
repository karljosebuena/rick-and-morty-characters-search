
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql/",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      // preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        // "typescript-react-apollo"
        "typescript-urql",
        "urql-introspection"
      ]
    }
  }
};

export default config;
