import logo from './logo.svg';
import './App.css';
import DashBoard from './Components/Dashboard/DashBoard';

function App() {
  return (
    <div className="App ">
      <nav className='p-2'>
        <h5 className='text-muted'>Covid-19 Tracker</h5>
      </nav>
      <br />
      <DashBoard />
    </div>
  );
}

export default App;
