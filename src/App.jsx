import { Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <div>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>Content</main>
      </div>
    </div>
  );
};

export default App;
