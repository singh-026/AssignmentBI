# React Native Architecture(Typescript) 

## Requirements:-

- Shopify Restyle (styling)
- Redux Toolkit (state management)
- Redux Logger (logging)
- Babel Transform Remove Console (removing console in production builds)
- React Native Size Matters (uniform scaling)



### Structure :-
      .
      ├── _app 
            └── hooks                 (global dispatch and selector hooks)
            └── store                 (redux store)
      ├── _features  
            └── actions               (actions and their async Thunks for state management)
      ├── _types                      (folder containing all the project's types ...)
      ├── assets                      (contains assets)
            └──icons
            └──vectors
            └──images
            └──fonts
      ├── components                  (reusable comps made using the scalingUtils or theme)
      ├── config
            └──api                    (api end points)
            └──constants              (constants like text to be put here)
            └──errors                 ( contains custom error types for typesafing errors)
            └──services               (api calling done here)
            └──theme                  (app theme setup)
      ├── hooks                       (custom hooks used throughout the project)
      ├── navigation                  (contains Navigations Stacks)
      ├── utils                       (utility functions used throughout the project)
            └──scalingUtils           (for uniform scaling)
      └── babel.config.js
      └── react-native.config.js
      └── tsconfig.js
      └── README.md

### Contribution

Well this is a basic architecture but there's always scope for improvements. In case you would like to, a PR is most welcome. 
Thanks

**References**	[React Native](https://reactnative.dev/)	, [ReactJS](https://react.dev/)	, [Shopify Restyle](https://github.com/Shopify/restyle)	, [Redux Toolkit](https://redux-toolkit.js.org/)	, [React Redux](https://react-redux.js.org/)	, [Zod](https://zod.dev/)	, [React Native Size Matters](https://www.npmjs.com/package/react-native-size-matters)



  
