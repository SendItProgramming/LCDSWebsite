import React from 'react';
import ReactDOM from 'react-dom';
import WebPage from '../WebPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WebPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
