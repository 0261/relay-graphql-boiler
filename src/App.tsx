import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { createEnvironment } from './graphql/relay';
import Routes from './routes';

export default (): JSX.Element => {
  return (
    <RelayEnvironmentProvider environment={createEnvironment()}>
      <Routes />
    </RelayEnvironmentProvider>
  );
};
