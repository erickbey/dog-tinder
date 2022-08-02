import './App.css';
// import AccountSetup from './components/AccountSetup/AccountSetup';
import DogProfileCard from './components/DogProfileCard/DogProfileCard';
// import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <div className='app__container'>
        <DogProfileCard />
      </div>
    </div>
  );
}

export default App;
