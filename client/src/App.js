import './App.css';
import AccountSetup from './components/AccountSetup/AccountSetup';
// import DogProfileCard from './components/DogProfileCard./DogProfileCard';
// import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AccountSetup />
      {/* login */}{/* logout */}

      {/* <section className='body'>
        <DogProfileCard />
      </section> */}
    
      {/* match when mutal likes */}
    </div>
  );
}

export default App;
