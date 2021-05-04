# FRONTEND STARTED KIT
Frontend Boilerplate is a simple front-end template for building fast, robust, and adaptable for sites, massive markup. Easy use, easy extendable.

## WHAT'S INCLUDED

- Convert Pug to Html
- Convert Scss to css
- Concatenate Js files
- Uglify the JS files
- Build with Gulp
- Using TailwindCss as core css framework (Just in time mode)

### TailwindCss Just In Time Mode
This comes with a lot of advantages:
[Content from tailwind official](https://blog.tailwindcss.com/just-in-time-the-next-generation-of-tailwind-css).
- **Lightning fast build times**. Tailwind can take 3–8s to initially compile using our CLI, and upwards of 30–45s in webpack projects because webpack struggles with large CSS files. This library can compile even the biggest projects in about 800ms _(with incremental rebuilds as fast as 3ms)_, no matter what build tool you're using.
- **Every variant is enabled out of the box**. Variants like `focus-visible`, `active`, `disabled`, and others are not normally enabled by default due to file-size considerations. Since this library generates styles on demand, you can use any variant you want, whenever you want. You can even stack them like `sm:hover:active:disabled:opacity-75`. Never configure your variants again.
- **Generate arbitrary styles without writing custom CSS.** Ever needed some ultra-specific value that wasn't part of your design system, like `top: -113px` for a quirky background image? Since styles are generated on demand, you can just generate a utility for this as needed using square bracket notation like `top-[-113px]`. Works with variants too, like `md:top-[-113px]`.
- **Your CSS is identical in development and production**. Since styles are generated as they are needed, you don't need to purge unused styles for production, which means you see the exact same CSS in all environments. Never worry about accidentally purging an important style in production again.
- **Better browser performance in development**. Since development builds are as small as production builds, the browser doesn't have to parse and manage multiple megabytes of pre-generated CSS. In projects with heavily extended configurations this makes dev tools a lot more responsive.

To see it in action, [watch this video](https://www.youtube.com/watch?v=3O_3X7InOw8).
## INSTALLATION
Using `npm` or `yarn` to install all dependencies:

```
  $ yarn
```
##  DEVELOPMENT
Builds the application and starts a webserver with livereload. By default the webserver starts at port 4000.
```
  $ yarn dev
```

## BUILD
- Compile the Scss files to Css
- Autoprefix and minify the Css file
- Automic Change all .css files to .min.css (including in Html)
- Concatenate Js files
- Uglify the Js
- Automic Change all .js files to .min.js (including in Html)

```
  $ yarn build
```
## FOLDER STRUCTURE
### STYLES
- Build with tailwindcss
- Tailwindcss just in time config with postCss will update after each change
- main.scss include all our scss
- plugins.scss stand for each library scss we use, could be a.scss, b.scss, or import from node_modules
- We seperate here because we don't want to recompile all our scss each time we make change.

```
.
├── ...
├── styles               # All style go here
│   ├── abstracts        # Variables, tailwind variables generate, functions, mixins
│   ├── base             # Global styles, Utilities and typography
│   ├── pages            # Specify style for each page
│   ├── vendor           # Third party, scss files or import from node_modules to plugins.scss
│   └── main.scss        # Import all styles
└── ...
```

### JAVASCRIPT

```
.
├── ...
├── blocks                  # Contain all block components and modules (pug, scss, js)
│   ├── components          # All common components
│   │   ├── button          # Button components
│   │   │   ├── button.js   # Button components javascript file (if have)
│   │   └── ...             # Other components
│   ├── modules             # All modules
│   │   ├── header          # Header modules
│   │   │   ├── header.js   # Header modules javascript file (if have)
│   │   └── ...             # Other modules
├── js                      # All Javascript files
│   ├── vendor              # Third party, js file or import from node_modules to plugin.js
│   ├── import              # Contain all components and modules javascript
│   │   ├── _components.js  # Contain all components javascript
│   │   ├── _modules.js     # Contain all modules javascript
│   │   └── ...             # Other javascript files
│   └── main.js             # Import all components and modules javascript and others
└── ...
```
### PUG

```
.
├── ...
├── blocks                  # Contain all block components and modules (pug, scss, js)
│   ├── components          # All common components
│   │   ├── button          # Button components
│   │   │   ├── button.pug  # Button components pug file
│   │   └── ...             # Other components
│   ├── modules             # All modules
│   │   ├── header          # Header modules
│   │   │   ├── header.pug  # Header modules pug file
│   │   └── ...             # Other modules
├── views                   # All Pug Views files
│   ├── helpers             # All mixin helper that not in any category
│   ├── layout              # Contain all layout
│   │   ├── default.pug     # Default layout
│   │   └── ...             # Other layout
│   └── index.pug           # Page index
│   └── ...                 # Other pages
└── ...
```
