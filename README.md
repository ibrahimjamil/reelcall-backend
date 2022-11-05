# GraphQL Service 🚀

The GraphQL service is a backend to reelcall.com. It serves the browsers GraphQL requests. The repo is written in Node.js and uses Apollo Server as its GraphQL framework.

## Table of Contents

* [Running Tests](#running-tests)
  * [Unit Tests](#unit-tests)
  * [Integration Test](#integration-tests)
* [Running Locally](#running-locally)
* [Contributing](#contributing)
* [License](#license)

## Running Tests

### Unit Tests

```shell
$ npm install
$ npm run test
```

### Integration Tests

We haven't built an integration testing suite yet 😱

## Running Locally

You must be locally running a MySql DB with a `reelcall` schema.

**Clone the repository and install the dependencies**

```shell
$ git clone https://github.com/reelcall/reelcall-graph.git
$ cd reelcall-graph
$ npm install
```

**Setup Environment Variables**

```shell
$ cp example.env .env
```

Update any environment variables that aren't set or may have different values on your machine. Ask someone for help if you aren't sure what to do here.

**Run DB Migrations**

```shell
$ npx prisma migrate reset
```

**Run the Server**

```shell
$ npm run dev
```

Assuming you don't see any errors in the console, you should be good to go! 🎊🎊

<!-- TODO add a section explaining the code -->
<!-- ## Directory Structure -->

## Contributing

If you want to contribute, fetch the latest version of `main` and create your own feature branch off of that. When you're ready create a pull request into `main`, and ask someone for a code review.

If you want to create a new GraphQL resolver, you should use `npx plop resolvers` to autogenerate all the boilerplate code.

## License

ReelCall © 2022

Do not redistribute.

