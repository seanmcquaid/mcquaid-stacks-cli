/* eslint "sort-keys": ["warn", "asc", {"caseSensitive": false, "natural": false, "minKeys": 2}] */

const enUSLocale = {
  Dialog: {
    close: 'Close',
  },
  HomePage: {
    kitchenSink: 'Kitchen Sink',
    reactHookFormZod: 'React Hook Form with Zod',
    reactQuery: 'Querying and Mutating Data with React Query',
    reactRouter: 'React Router',
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
    title: "We're sorry, there was a problem loading this page",
  },
  ReactQueryPage: {
    delete: 'Delete',
    title: 'Querying and Mutating Data with React Query',
    view: 'View',
  },
  ReactRouterGeneroutedPage: {
    openModal: 'Open Modal',
  },
  Routes: {
    home: '/',
    kitchenSink: '/kitchen-sink',
    notFound: '*',
    reactHookFormZod: '/react-hook-form-zod',
    reactQuery: '/react-query',
    reactRouter: '/react-router',
  },
} as const;

export default enUSLocale;
