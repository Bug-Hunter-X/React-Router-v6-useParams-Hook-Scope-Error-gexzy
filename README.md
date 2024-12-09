# React Router v6 useParams Hook Scope Error

This example demonstrates a common error encountered when using the `useParams` hook in React Router v6. The `useParams` hook is designed to access parameters from the URL within a route's component, and accessing it outside the scope will result in undefined or null values. 

This repo contains two files:
- `useParamsError.js`: Demonstrates the error scenario.
- `useParamsSolution.js`: Shows the correct way to access params, using the location prop passed to children.