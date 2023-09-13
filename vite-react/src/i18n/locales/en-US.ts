/* eslint "sort-keys": ["warn", "asc", {"caseSensitive": false, "natural": false, "minKeys": 2}] */

const enUSLocale = {
  Dialog: {
    close: 'Close',
  },
  HomePage: {
    kitchenSink: 'Kitchen Sink',
    reactHookFormZod: 'React Hook Form with Zod',
    reactQuery: 'Querying and Mutating Data with React Query',
    reactRouterGenerouted: 'React Router and Generouted',
    subTitle:
      'Below you will find a list of example routes with commonly used patterns for React projects',
    title: 'Welcome to a scaffolded project with INSERT NAME HERE!',
  },
  Modal: {
    close: 'Close',
  },
  ReactQueryPage: {
    delete: 'Delete',
    title: 'Querying and Mutating Data with React Query',
    view: 'View',
  },
  ReactRouterGeneroutedPage: {
    openModal: 'Open Modal',
  },
} as const;

export default enUSLocale;
