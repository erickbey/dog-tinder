import './App.css';
import DogProfileCard from './components/DogProfileCard./DogProfileCard';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* login */}{/* logout */}

      <section className='body'>
        <DogProfileCard />
      </section>
    
      {/* match when mutal likes */}
    </div>
  );
}

export default App;
