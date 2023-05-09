
# React Typescript - base code setup

The ReactJS TypeScript project is built using a combination of components, routers, Redux store, and Axios API services. Components are the building blocks of the project, allowing for the creation of reusable UI elements. Routers help manage the application's navigation by defining routes and rendering the appropriate components. The Redux store manages the state of the application and allows for the easy sharing of data between components. Axios API services are used to make HTTP requests to a server and handle the responses. By using TypeScript, the project benefits from static typing, providing better code reliability and easier maintenance. Overall, this project provides a powerful and flexible solution for building complex web applications.


## Folder Structure
* src
   - components
   - routers
   - store
      - modules
        - user-details
          - actions
             - userDetails.thunk.ts
          - reducers
             - userDetails.reducers.ts
          - userDetails.slice.ts
          - index.ts
      - tools
        - constants.ts
        - tools.ts
        - types.ts
      - store.ts
      - index.ts
   - services
      - base-api
        - baseUrl.ts
      - modules
        - user-details
           - index.ts
           - types.ts
      - tools
        - apiError.ts
        - constants.ts
        - types.ts
        - index.ts
      - index.ts