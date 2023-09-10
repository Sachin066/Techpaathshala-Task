import Navbar from './components/Navbar';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className='scroll'>
     
      <Navbar />

      <h2>New Movies</h2>
      <div className='app_card'>
      <Card />
      <Card />
      <Card />
      </div>

      <h2>New Movies</h2>
      <div className='app_card'>
      <Card />
      <Card />
      <Card />
      </div>

      <h2>New Movies</h2>
      <div className='app_card'>
      <Card />
      <Card />
      <Card />
      </div>

      <h2>New Movies</h2>
      <div className='app_card'>
      <Card />
      <Card />
      <Card />
      </div>

    </div>
  );
}

export default App;
