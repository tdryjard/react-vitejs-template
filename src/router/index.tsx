import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// IMPORTATION DE PAGE
import { Home } from 'pages';
import PageWrapper from 'pages/Wrapper';

import routes from 'router/routes';

function Router(): ReactElement {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}

export { routes };
export default Router;
