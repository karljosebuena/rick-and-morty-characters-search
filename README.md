<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://files.cults3d.com/uploaders/14307074/illustration-file/3c12b15c-003f-409f-a9b6-b0dcde4495d8/render0001.png" alt="Project logo"></a>
</p>

<h3 align="center">rick-and-morty-characters-search</h3>

---

## 📝 Table of Contents

- [About](#about)
- [Demo](#demo)
- [Getting Started](#getting_started)
- [Running the tests](#tests)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [TODO](#todo)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

Rick and Morty character search web application backed by the official Rick and Morty graphql endpoint [Rick and Morty GraphQL Endpoint](https://rickandmortyapi.com/graphql). The application allows users to explore a comprehensive list of characters from the Rick and Morty series. Each character is presented in a user-friendly format, displaying their essential details such as name, species, origin, location, and status. The application has been built using Nextjs + TypeScript, ensuring a robust and type-safe codebase. Additionally, I have utilized Yarn as the package manager and Material-UI (MUI) for creating a responsive and visually appealing user interface. To enhance the application's state management, I have incorporated Redux, a popular state management library in the React ecosystem. This choice ensures efficient handling of state changes, providing a seamless user experience.For authentication I've used clerk. And lastly, I've integrated openAPI to generate character information wich is not available in the official Rick and Morty GraphQL endpoint.

## 🌟 Demo <a name = "demo"></a>

[Rick and Morty Characters Search](https://rick-and-morty-characters-search.vercel.app/) - Live App in Vercel

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
Sigup and create account on these to get APIs needed to run the app:
1. https://clerk.com/
2. https://openai.com/
You will need to create secret keys from these apps and store in the .env file.
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Clone the app

```
git clone git@github.com:karljosebuena/rick-and-morty-characters-search.git
```

Go to app folder

```
cd rick-and-morty-characters-search
```

Install dependencies

```
yarn install
```

Created .env file in the root folder. Use this template

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<GET_ME_FROM_CLERK>
CLERK_SECRET_KEY=<GET_ME_FROM_CLERK>
OPENAI_API_KEY=<GET_ME_FROM_OPENAI>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
GRAPHQL_URL=https://rickandmortyapi.com/graphql/
```

Run the app

```
yarn dev
```

You should now be able to see the application running at http://localhost:3000

## 🔧 Running the tests <a name = "tests"></a>

The app is configured with jest for creating tests. It already has a sample test. But need to add more to cover all pages/components and apis.

To run test

```
yarn test
```

## 🚀 Deployment <a name = "deployment"></a>

There are many options you can go for deploying this, I went with vercel.
To deploy simply upload your codebase to github then:

1. Signup/Signino to vercel.
2. Add new Project.
3. Import repo name in this case 'rick-and-morty-characters-search'.
4. Goto Environment Variables section, then copy paste everything from .env file.
5. Click deploy.
6. While waiting for the deployment to finish, go to the project Settings.
7. From the sidebar click Functions.
8. Change the Function Region to what's nearest to you. In my case it's sin1. Click Save.
9. Once deployment is done you can click the 'Visit' button to launch the app.

For more details on deploying github project to vercel, check it here [Github-Vercel Deployment Guide](https://vercel.com/docs/deployments/git#deploying-a-git-repository)

## ⛏️ Built Using <a name = "built_using"></a>

- [Typescript](https://www.typescriptlang.org/) - Type safe coding
- [Rick and Morty GraphQL Endpoint](https://rickandmortyapi.com/graphql) - GraphQL Endpoint
- [Clerk](https://clerk.com/) - Authentication
- [OpenAI](https://openai.com/) - Backend (Prompt Engineering)
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [ReactJs](https://react.dev/) - Frontend
- [NextJs](https://nextjs.org//) - React Framework
- [MUI](https://mui.com/) - React Component Library
- [Redux](https://react-redux.js.org/) - React State Management
- [React Query](https://tanstack.com/query/v4/docs/react/overview) - React Data synchronization Library
- [URQL](https://formidable.com/open-source/urql/docs/basics/react-preact/) - GraphQL Client
- [Jest](https://jestjs.io/) - JS Testing Framework
- [Vercel](https://vercel.com/) - App Hosting

## 🖊️ Todo <a name = "todo"></a>

1. Fix problem with search when result is 1 page only and current page is > 1
2. Add more tests
3. Apply SSR (Server Side Rendering)

For more details on deploying github project to vercel, check it here [Github-Vercel Deployment Guide](https://vercel.com/docs/deployments/git#deploying-a-git-repository)

## 👨 Author <a name = "authors"></a>

- [@karljosebuena](https://github.com/karljosebuena)
