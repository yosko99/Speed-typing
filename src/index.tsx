import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import reportWebVitals from './reportWebVitals';
import 'axios-progress-bar/dist/nprogress.css';
import './styles/bootstrap.min.css';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
// @ts-ignore
import { loadProgressBar } from 'axios-progress-bar';

loadProgressBar();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
        <App />
        <ReactQueryDevtools initialIsOpen/>
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById('root')
);

reportWebVitals();
