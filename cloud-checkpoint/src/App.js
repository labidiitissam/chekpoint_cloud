import './App.css';
import Map from './Components/Map';
import Navb from './Components/Navbar';

function App() {
  const location = {
    address: 'R5V9+FR Ariana',
    lat: 36.8437076,
    lng: 10.1690117,
  }
  return (
    <div className="App" style={{backgroundImage:"url(https://static.vecteezy.com/system/resources/previews/001/984/880/original/abstract-colorful-geometric-overlapping-background-and-texture-free-vector.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <Navb />
      <Map location={location} zoomLevel={17}/>
    </div>
  );
}

export default App;