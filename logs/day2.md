# Day 2

### Theory

- layout.tsx acts as the parent for all the routes.
- layout is a root component that shares one code across all children.
- we can create different layout files for specific components/pages.
- but then we would get conflicting code from root layout and new layout that is why we need 🔽
- Route groups: they allow you to organize the route segments in project structure without impacting the url path. eg. (folder_name)

- Error Handling: https://nextjs.org/docs/app/getting-started/error-handling used to display custom error messages using error.tsx
- The error file closest to the route takes priority unlike layout it only shows the error with higher priority.
- we can create a global-error.tsx file make a global error file in root folder but still will be downvoted by higher prio error file.

Data Fetching:
- data fetching can be done in two ways: server and client data fetching
- server data fetching is easier and should be applied instead of client data fetching since it has less code and still better optimised
- server fetching is better since the component sits in the server near the data. -> improves DX
- client components cannot be async.
- both client and server data fetching are performed in this app.
- server side data fetching can parallelize the requests in constrast to the client side data fetching.
- server side data fetching allow direct db calls instead of making api calls.

API Routes:
- we can write server code directly in Next.js using the special route.ts/js file.
- It can be Static, Dynamic or Nested.


### Tasks performed

- added navbar in different layouts.
- Created route groups. 
- performed error handling.
- performed a GET request in route.ts to implement api code in our app
- made api routes for a sample db.ts
- used data fetching to fetch books from sample data.
- used static, nested and dynamic API Routes.