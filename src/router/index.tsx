import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// IMPORTATION DE PAGE
import { Home } from 'pages';

import routes from 'router/routes';

import DefaultLayout from 'layouts/Default';

function Router(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.home.path}
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export { routes };
export default Router;
