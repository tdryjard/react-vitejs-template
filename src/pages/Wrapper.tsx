import React, { ReactElement } from 'react';
import { Header } from 'components/shared';

interface Props {
  children: ReactElement;
}

const PageWrapper = ({ children }: Props): ReactElement => {
  return (
    <div id="body-wrapper">
      <Header />
      {children}
    </div>
  );
};

export default PageWrapper;
