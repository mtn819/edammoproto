# Edammo Prototype
Implementation of [this site](https://sapphireratner.wixsite.com/my-site/).

# Contents
- [How to install](#howtoinstall)
- [Structure](#structure)
- [Additional Notes](#additionalnotes)

# Installation <a id="howtoinstall"></a>
    # go into an empty folder you like
    git pull https://github.com/mtn819/edammoproto.git
    npm install

    # to run
    npm start

# Structure <a id="structure"></a>
This project was built on top of [Create React App](https://create-react-app.dev/), which is reflected in its structure.

## src/index.js
Mounts the application.

## src/Router.js
Routes the project via [React Router](https://reactrouter.com/web/guides/quick-start).

## src/custom.css
Defines much of the shared theming elements about the site, like palette variables.

## src/components
Stores things reused across entire webpage. Also designated for heavily reused utility functions.

## src/pages
Stores each page.

# Additional Notes <a id="additionalnotes"></a>

## CSS
- This project largely follows the [BEM](http://getbem.com/) convention.
- Class definitions are avoided where tags are already significantly descriptive (like &lt;h1&gt;, which often clearly denotes a header).
- Structure of a class looks like pageBlock_element--modifier.
- This project avoids component creation within reason to offer greater flexibility; instead, it tries to make CSS and BEM do as much of the heavy lifting as possible.

## UI Libraries Employed
- [Material UI (icons, in particular)](https://mui.com/)
- [React Elastic Carousel](https://www.npmjs.com/package/react-elastic-carousel)
- [Particles.js](https://www.npmjs.com/package/react-particles-js)
- [aos](https://www.npmjs.com/package/aos)