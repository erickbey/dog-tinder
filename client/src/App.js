import './App.css';
import DogPreviewCard from './components/DogPreviewCard/DogPreviewCard';
// import AccountSetup from './components/AccountSetup/AccountSetup';
import DogProfileCard from './components/DogProfileCard/DogProfileCard';
// import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <div className='app__container'>
        {/* <DogProfileCard /> */}
        <DogPreviewCard />
      </div>
    </div>
  );
}

export default App;
