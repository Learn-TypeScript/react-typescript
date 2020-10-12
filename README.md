[Understanding TypeScript - 2020 Edition](https://www.udemy.com/course/understanding-typescript/)

Don't limit the Usage of TypeScript to Angular! Learn the Basics, its Features, Workflows and how to use it!

Created by Maximilian Schwarzmüller

## Notes:

### 14. React.js & TypeScript

(176). **Setting Up a React + TypeScript Project**

- To create a new React App with TS, visit: [Adding TS](https://create-react-app.dev/docs/adding-typescript/).

- An alternative to `npx create-react-app my-app --template typescript` would be to install `create-react-app` globaly on your machine: `sudo install -g create-react-app`. Then you don't need to add `npx`.

- If you are already in the folder where you want your app to be created, you can ommit the name of the app-folder by setting a dot, like `create-react-app . --template typescript`.

- In the src folder we find files that end in `.tsx`. That means that we can write also `jsx` code.

(177). **How Do React + TypeScript Work Together?**

- In App.tsx, we have: `React.FC`. In `node_modules`, there is a `@types` file where all the translations take place. So `FC` stands for `FunctionComponent`. You can replace `FC` with `FunctionComponent`. An alternative would be `ClassComponent`.
