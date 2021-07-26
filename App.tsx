import React from 'react';
import {SafeAreaView} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Navigation} from './src/navigation/Navigation';
import styled from 'styled-components/native';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeArea>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </SafeArea>
  );
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export default App;
