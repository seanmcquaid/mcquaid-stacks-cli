import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import initializeApp from './initializeApp.client';
import { HydratedRouter } from 'react-router/dom';

initializeApp().then(() =>
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <HydratedRouter />
      </StrictMode>,
    );
  }),
);
