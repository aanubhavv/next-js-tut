# Day 1

## commands used:

### Theory

- layout.tsx acts as the parent for all the routes.
- layout is a root component that shares one code across all children.
- we can create different layout files for specific components/pages.
- but then we would get conflicting code from root layout and new layout that is why we need 🔽
- Route groups: they allow you to organize the route segments in project structure without impacting the url path. eg. (folder_name)

- Error Handling: https://nextjs.org/docs/app/getting-started/error-handling used to display custom error messages using error.tsx
- The error file closest to the route takes priority unlike layout it only shows the error with higher priority.
- we can create a global-error.tsx file make a global error file in root folder but still will be downvoted by higher prio error file.

### Tasks performed

- added navbar in different layouts.
- Created route groups. 
- performed error handling.