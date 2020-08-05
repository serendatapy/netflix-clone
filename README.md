This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### How the program works

The program mainly consists of rows of 1 row component, which draws it's data from a movie database API.
The program uses 2 packages
-npm i react-youtube
https://www.npmjs.com/package/react-youtube
https://developers.google.com/youtube/player_parameters

-npm i movie-trailers
which allows the application to run movie trailers.

1. App.js Renders all the components, namely Row and Banner, changing only the API calls mostly.
2. Row.js give the layout for the row to be rendered. It uses a state to store
the movies array that is fetched Async through the useEffect function.
Then through a map function it displays all the movies from the result.
It also implements conditional styling for the Netflix Originals row.
Instead to play the movie trailers it implements the functionality of another 2 libraries. See Row extra Notes at the bottom

3. Banner.js lays out the banner for the topmost part of the app. It also uses a useState to store a movie (randomly selected) that is fetched Async through
its useEffect function. It implements a trucate function to make sure the
description of the banner remains the same length, and a fade div at the bottom
to make the banner blend into the row components more naturally.
4. There are a couple of auxilirary js files
  *  requests.js contains a list of queries to make it easier to draw addresses
  *  axios.js makes it easier to implement requests to server, without needing to write out all the promises code.
5. Nav.js the navBar is essentially a fixed bar at the top with a couple of icons. It achieves it's fade in/out
through a useEffect and scroll listener to activate conditional styling.

#### Row extra notes
Note about useEffect: Whenever you pull in a variable from outside (fetchUrl)
  it MUST be included in the dependencies. Otherwise if the
  Url changes, objects won't be re-rendered. It IS a dendency
  because the rendering depends on it!
  Note2: inside use effect, you must define then call async
  function, can't just run async

  Here row implements 2 imported libraries, react-youtube and movie-traile
  *react-youtube gives the YouTube component, and allows us to
  play an imbedded movie on site
  *movie-trailer gives us useful functions such as movieTrailer('movie'[options][callback])
  this returns a URL, which we use in the .then function

  We use also a function URLSearchParams, which creates an object that uses the url obtained.
  This object allows us to call .get method, which enables us to extract the part of the url
  that interests us. In this case after ('v').

  we then useState to save the video 'id', which we then use with YouTube react to play our video
  if found.

  handleClickMovie -
  if there is already a trailer URL, close it
  else
  Check we have a movie name(in case search returned null) else close it.
  with returned url, extract only the part we needs from Url
  then save it to the state trailerUrl

