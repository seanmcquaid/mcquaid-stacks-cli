/* eslint "sort-keys": ["warn", "asc", {"caseSensitive": false, "natural": false, "minKeys": 2}] */

const enUSLocale = {
  Dialog: {
    close: 'Close',
  },
  HomePage: {
    kitchenSink: 'Kitchen Sink',
    reactHookFormZod: 'React Hook Form with Zod',
    reactRouterGenerouted: 'React Router and Generouted',
    reduxToolkit: 'Redux Toolkit',
    reduxToolkitQuery: 'Redux Toolkit Query',
    subTitle:
      'Below you will find a list of example routes with commonly used patterns for React projects',
    title: 'Welcome to a scaffolded project with INSERT NAME HERE!',
  },
  KitchenSinkPage: {
    submit: 'Submit',
  },
  Modal: {
    close: 'Close',
  },
  NotFoundPage: {
    home: 'Home',
    notFound: 'Not Found',
    pleaseTryADifferentRoute: 'Please try a different route',
  },
  PageError: {
    goBack: 'Go Back',
    refresh: 'Refresh',
    title: "We're sorry, there was a prolbem loading this page",
  },
  ReactRouterGeneroutedPage: {
    openModal: 'Open Modal',
  },
  ReduxToolkitPage: {
    decrement: 'Decrement',
    increment: 'Increment',
  },
  ReduxToolkitQueryPage: {
    delete: 'Delete',
    title: 'Redux Toolkit Query',
    view: 'View',
  },
} as const;

export default enUSLocale;
