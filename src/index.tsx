import React from 'react';
import { createRoot } from 'react-dom/client';

import Router from 'router/index';

import './i18n';

const rootElement = document.getElementById('root');
if (rootElement != null) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
  );
}
