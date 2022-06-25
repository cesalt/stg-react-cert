# Chuck Norris

### A STG React Certification Module

In this project you will be creating a simple React App that will find and return Chuck Norris jokes. Since this project is designed to test your Javascript fundamentals and basic React skills, there will be comments and instructions provided to help with non-React specific tools.

## IMPORTANT --

To more clearly showcase your React skill, you will need to follow a couple of procedural steps.

1. Before you work on each step of this React certification you will need create a new branch specifically for that step.
2. As you work you will need to commit and push that work to your repository on Bitbucket at least daily while working on this certification. While there is no official time limit on completing this certification we want to see the progress that you have made. (This does not mean that you need to make a commit daily, it simply means that any day that you do work on the certification you should make a commit and push that work by the end of the day.)
3. After each component section is completed you will need to save and push your code AND make a pull request to merge your code to your repository's master branch for each section of your work. (You can merge your code to the master branch immediately but please do not delete the merged branch from your repository!)
4. Be sure to add comments in your code that demonstrate your knowledge of Javascript and React fundamentals as listed at the end of this file. This is necessary to show your knowledge of these important concepts and to assist the Certification lead in verifying that you have completed all of the tasks in this React certification. You'll probably find that it is easier and more convenient to make these comments as your work on the certification rather than wait until the work has been completed.

We have provided a few resources to assist you with understanding the fundamentals of Javascript and React. You can find these resources in your Resources.md file or online here: [React Certification Resources](https://docs.google.com/document/d/1iBpofpqK7h4XHfJgTnBKAg78zamde31eTEuvw8BCZcA/edit?usp=sharing). We also have a react_certification Slack channel where you can post questions and get help from other React certification veterans and our Scripted Lead developers.

_Do not spend a lot of time on styling this project._ We want to see enough styling to know that you understand how to style React components but we do not want you to spend a lot of time on styling as styling is not the focus of this React certification.

_Please read through the rest of this outline before you write any code._ Some of the later tasks can be incorporated while working on earlier tasks (e.g. demonstrating basic JavaScript and React knowledge and skills), and understanding the scope of the project will help to couple these tasks together.

As you complete tasks, change the numbers boxes to [x]. (ex: 1. -> [x]). This will help track your work through this certification process.

## Initializing App

1. Create a new React app (you may use the React CLI)
2. Create your React certification repository, initialize your app with git and push your master branch to your new repository.
3. Add a copy of this Readme.MD file to your React certification repository at the main level. (You will probably want to copy all of the .md files to your repository for easy reference.)
4. **Important** Share your repository with the certification supervisor.
    - In your Bitbucket repository click the `...` (in the top right corner of the screen).
    - Click `Share Repository`
    - Add your certification supervisor's username of email address in the `Users` input, click the `Add` button, then click `Write` to give them write access.

5. Create a new branch called `Initializing` and checkout this branch. This is where you will begin working on this project.
6. Remove all the existing code from your `render()` method.
7. Save your work and push these changes to Bitbucket.
8. Create a Pull Request (PR) for your code and merge it with the `master` branch. (Do not delete this branch.)

## Routing

1. Create a new branch called `routing` and checkout this branch.
2. We recommend that you create a new folder inside of your `src` folder called `components`. All future component files should be created in this folder.
3. Set up the following routes:
    - `Home` - the main (landing) page && login page
    - `Categories` - a page which will contain all joke categories
    - `Search` - a page to search for a joke by a search term
    - `Jokes` - a page the lists all viewed jokes

4. Add a button, menu, or some other way to navigate between routes.
5. Save your work and push these changes to Bitbucket.
6. Create a Pull Request (PR) for your code and merge it with the `master` branch. (Do not delete this branch.)

## Authentication

1. Create a new branch called authentication and checkout this branch.
2. On your main (landing) page set up a form to take an email and password to login.
    - The password should have a way to toggle masking and showing the password
    - The login button should be disabled until a username and password have been entered
    - The email field should have an email validation check; the login button should remain disabled until a valid-like email has been entered
    - The password should be validated to have at least 1 capital letter, 1 lower case letter, 1 number, and be between 6-10 characters in length.

3. When the login button is submitted an authentication method should be called that will **simulate** an HTTP call:
    - accept user input and put it in a json object
    - give an appropriate delay (1500 - 3000 ms)
    - show a spinner or give some other indication that the system "is working" to log the user in
    - update state so that remaining pages (Categories, Search && Jokes) are viewable
    - then redirect the user to a `Search` page (or one of the other pages in the app).

4. Prevent a user from accessing any other page without passing the "authentication" process.
5. Save your work and push these changes to Bitbucket.
6. Create a Pull Request (PR) for your code and merge it with the master branch. (Do not delete this branch.)

## Fetching Data

1. Create a new branch called `data` and checkout this branch.
2. On the main (landing) page:
    - list each page and give a short explanation of the contents of each of the pages in the app
    - provide links to each page (use a menu)
    - links only work if the users has "logged in"

3. On the `Categories` page:
    - utilize a React class and the `componentDidMount` lifecycle method in this step
    - fetch a list of all the joke categories and display them in a list
    - The api endpoint to get the joke categories is: [https://api.chucknorris.io/jokes/categories](https://api.chucknorris.io/jokes/categories)
    - Make each category in the list clickable such that when a category is clicked it should display a random joke from that category (ex: open a dialog or modal with a joke from the selected category)

4. On the `Search` page:
    - Create a search bar
    - Create a way for the user to fetch jokes (ex: search for jokes as the user types in the search bar or use a submit button)
    - When a search term is submitted you should fetch jokes from this api endpoint: [https://api.chucknorris.io/jokes/search?query={query}](https://api.chucknorris.io/jokes/search?query={query})
    - Display the results of the search query in a list. Truncate the text of the joke to the first 50 characters.
    - Each listed joke should be clickable such that when a joke is selected the entire joke should be displayed (ex: open a dialog or modal with a joke from the selected category)

5. On the `Jokes` page:
    - Don't do anything...this page will be updated in the next section

6. Save your work and push these changes to Bitbucket.
7. Create a Pull Request (PR) for your code and merge it with the `master` branch. (Do not delete this branch.)

## State Management

1. Create a new branch called `state-management` and checkout this branch.
2. Refactor your app to use state management (use Redux and a Redux Store, React Context or another state management option of your choice). You should at least have categories and viewed jokes stored in this state Store.
3. If you choose to use Redux, create actions and reducers to correspond with your data model. If you have choosen a different state management option, set up you app to utilize the applicable management options.
4. Use the `Jokes` page to display all of the jokes that the user has looked at or selected.
    - Create a way to display every joke that the user has view
    - The list should show the category of the joke and the actual joke and the order or time visited
    - There will need to be a way to organize/sort the list of jokes by category (ascending/descending) or by order visited (ascending/descending)

5. Save your work and push these changes to Bitbucket.
6. Create a Pull Request (PR) for your code and merge it with the `master` branch. (Do not delete this branch.)

## Refactor to Utilize Hooks

1. Create a new branch called `hooks` and checkout this branch.
2. Choose one of your class components and convert the component into a functional component that utilizes hooks. If you have already written every component in the app as a functional component, convert one of the functional components into a class component that utilizes at least two React lifecycle methods.
    - if you have already utilized a functional component in the app simply add a commment to identify your use of functional components as directed in the **Finish Project** section of this document.

3. Make sure to utilize at least 3 hooks in your app. (eg: useState, useEffect, etc)
4. Save your work and push these changes to Bitbucket.
5. Create a Pull Request (PR) for your code and merge it with the `master` branch. (Do not delete this branch.)

## Testing

If you have not been adding tests as you were developing the previous features, then add tests now.

1. Create a new branch called `testing` and checkout this branch.
2. You will add unit tests to your project. Some examples may include:
    - Test routing component works correctly
    - Test that the http requests are configured correctly
    - Test login component features (email & password validation)
    - Test the search bar works properly

3. Achieve at least 90% test coverage for your project.
4. Make sure to document where the test coverage report is stored. You may also want to add a script to your package.json file for convenience in running your testing script with coverage.
5. Save your work and push these changes to Bitbucket.
6. Create a Pull Request (PR) for your code and merge it with the master branch. (Do not delete this branch.)

## Finish Project

1. (If you have not already added the comments below to your project, create a `comments` branch)
2. Inside of this branch you will add comments to your code to demonstrate your use and knowledge of Javascript fundamentals as well as React basics. This should not be hard, but it will help us recognize your knowledge and use of ES6+ basics. **You do not need to identify every instance**, just 1-2 instances to show you know and understand these concepts.
3. Comments should be preceded with a `#` and should look something like this:
```
  // #closure
  function myClosure() = {...}
```
or this:
```
  /* #map function */
  myArray.map(...);
```

4. In your code you should add comments to demonstrate these **Javascript** fundamentals:
    - Closures
    - `this` keyword
    - Arrow functions
    - Array Functions
        - Map
        - Filter
        - Reduce

    - Destructuring
    - Spread Operator
    - Promises
    - Blocked-scoped variable `let`
    - Blocked-scoped variable `const`

5. In your code you should add comments to demonstrate these **React** basics:
    - JSX
    - Rendering Elements
    - Class Components
    - Functional Components
    - Lifecycle methods (_at least 3 different methods_ should be commented in your class component(s))
    - React Hooks (_at least 3 different hooks_ should be commented in your functional component(s))
    - Event Handling
    - Props
    - State
    - Lists & Keys
    - Routing
    - Redux Reducers, React Context (or other state management)
    - Styles (2-3 different methods of applying styles to React components)

6. Comments should be styled similar to the Javascript comments.
7. **Create a basic.md file**. In this file list each item that you do not have in your app from the above Javascript and React basics. For each item, write a short code snippet and explanation of the item to demonstrate your understanding of it. In addition, choose 4 hooks (that are not used or identified in your app) and write a short code snippet and expalanation of its use.
8. Finally, make sure to remove all console.log statements and unused commented code from your project.
9. Push and merge the commented code to your `Master` branch. (Do not delete this branch.)
10. Email your practice manager that you have completed the certification project and that it is now **ready for a final review!**

## Congratulations
You have completed the React Certification!
