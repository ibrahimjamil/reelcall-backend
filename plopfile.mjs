export default function (plop) {
  plop.setGenerator("resolver", {
    description: "A new GraphQL resolver",
    prompts: [
      {
        type: "list",
        name: "parent",
        message: "Select the parent of your new resolver",
        choices: [
          "Query",
          "Mutation",
          "User",
          "Headshot",
          "Reel",
          "Project",
          "Role",
          "Question",
        ],
      },
      {
        type: "input",
        name: "name",
        message: "Enter the name of your new resolver",
      },
    ],
    actions: [
      {
        type: "add",
        path: "source/graphql/resolvers/{{lowerCase parent}}/{{name}}/{{name}}.ts",
        templateFile: "plop-templates/resolver.hbs",
      },
      {
        type: "add",
        path: "source/graphql/resolvers/{{lowerCase parent}}/{{name}}/{{name}}.test.ts",
        templateFile: "plop-templates/resolver.test.hbs",
      },
      {
        type: "add",
        path: "source/graphql/resolvers/{{lowerCase parent}}/{{name}}/index.ts",
        templateFile: "plop-templates/index.hbs",
      },
      {
        type: "append",
        path: "source/graphql/resolvers/{{lowerCase parent}}/index.ts",
        template: "// TODO please put me in alphabetical order\nexport { default as {{name}} } from \"./{{name}}\";",
      },
    ],
  });
};