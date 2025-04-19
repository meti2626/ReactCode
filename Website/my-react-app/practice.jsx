import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, This is My Component!</h1>
    </div>
  );
};

import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <div>
      <h1>Main App</h1>
      <MyComponent />
    </div>
  );
};

export default App;

export default MyComponent;
