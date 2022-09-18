# Project Exam 2 Resit - Mina Langlete

![](../Screenshot%202022-09-18%20at%2020.23.23.png)

## Description

This is a school project, it is a video game store page called Bits&Bots. I have build the site with React App and I have made a call to a API to get the content to my site. The deign and coding is all done my me.

## Built With

- React App
- API fetch
- Sass for styling
- Bootstarp for some coding

## Getting Started

### Installing

1. Clone the repo:

```bash
https://github.com/minalanglete/mina-langlete-exam2-bitsandbots.git
```

2. Install the project:

```
npm start
```

You can then open [http://localhost:3000](http://localhost:3000) in your browser to see the project.

## Contributing

This is a project given from Noroff. Thank you for this is the Brief:

### Brief

Project Exam 2 Resit

Goal
To take the skills learned over the last two years and take on an extensive project where the finished product should reflect the candidate's general development capabilities, in addition to visual and technical skills.

Brief
The final submission must have the following:
• A Gantt chart planning the project
• A style guide
• An Adobe XD (or other UI tool) prototype
• Use a CSS pre-processor
• Use a JavaScript Framework (Vue, React or Angular)
• Follow BEM
• A fully working website that fulfils the brief

The Project
You’ve been tasked with designing and developing a new video game store website called Bits & Bots. The owners want only registered users to be able to browse the site. The site must be responsive and work on all device sizes.

Requirements

Landing page
The landing page must include either a fullscreen video or slide show. Make sure you are allowed to
use the video or images you source for this.
The site requires registration and there must be two tabs in the middle of this page:

1. Login
2. Register
   The register tab must hold a form with email address and password inputs. Submitting the form
   must validate the inputs and write the values to localStorage.
   The login tab form must also contain email and password inputs and on submit check the values
   against those stored in localStorage. If the values match, the user will be redirected to the browse
   page, otherwise an “Incorrect username or password” message must be displayed.

Browse page
When first loading the browse page, an API call will be made to load a list of games. A loading
indicator must be displayed while the API call is in progress.
Once the call is complete, the page must display the list of games as items in columns and rows. The
title and image of each games must be displayed.
At the top of the page will be a list of genres as tags, tabs or menu items. Clicking on a genre will
load games of that specific genre.
Each item must have a more info or details link. Clicking this will take the user to the details page
with the id of the game in the url, e.g. /details/5
Somewhere on each game item there must be a favourite or add-to-cart icon button. Clicking on the
icon must add the game info in an object to an array in localStorage. This will act as the site’s
shopping cart. Clicking it again will remove it from the cart. The icon must indicate whether or not it
is in the cart.
At the top of the browse page there must be a view cart button which takes the user to the cart
page.

Details page
This page must retrieve the id from the url and make an API call to fetch the details for this game
using the id.
The student can decide which fields to display from the API call result.
The page must also include the favourite/add-to-cart icon and functionality.

Cart page
The cart page must display the list of games stored in the localStorage cart. All info for this list must
be retrieved from the cart. A remove button must exist on each item. Clicking this will remove the
game from the list and from localStorage.
If there are no items in the cart the page must display a relevant message.
A check out button on this page will take the user to the check out page. If there are no items in the
cart this button must be disabled.

Check out page
This page will have a form with inputs for the user’s name, address and credit card details. Relevant
validation must exist on each input.
Above the form the page must display the number of items in the cart.
If the input values all pass validation, the submit button must open a modal to confirm payment.
Once confirmed, the cart array will be emptied and the user redirected to the browse page.

Common page elements
• A log out button which will clear all information stored in localStorage and redirect the user
to the landing page
• Suggested: A breadcrumb element to make navigation easier

API
The API can be found at https://api.igdb.com/. You will need to register and use the key you are
provided with to make the API calls.
Component library
Consider using a component library like Bootstrap for your project.

Recommended Process
• Week 1 and 2: Planning and Design
• Week 3 to 6: Coding
• Week 7: Bug Fixing

Level 1 Process

1. Start by planning out the project. Develop a Gantt chart and a functional specification.
2. Next begin your research of likely users and browse competitor websites for ideas.
3. Create a style guide.
4. Build a prototype in a UI tool like XD, Sketch or Framer-X.
5. Create a repo on GitHub. Be sure to commit your code regularly.
6. Start coding. Ensure you use a CSS pre-processor, follow the BEM methodology, and use one
   of Vue, Angular or React to build the project.
7. Once you’ve finished development, start looking for bugs and ensure the site functions well
   on all viewports.

Submission
End of week 7:
Report with a link to your GitHub repo. Make sure the README file in your repo clearly explains how
to run the project. Your report must include a functional specification, Gantt chart, style guide and
prototype.

## This are the docs from React to strat the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
