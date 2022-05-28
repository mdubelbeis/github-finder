import { Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>Content</main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
