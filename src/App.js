import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedR from './component/AnimatedR';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <AnimatedR />
      </main>

      <ToastContainer />
    </div>
  );
}

export default App;
