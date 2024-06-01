import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.min.css"
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import PickoftheDay from './components/PickoftheDay';
import Comments from './components/Comments';


function App() {
  return (
    <div className="App">
      <AppBar/>
      <Banner/>
      <Menu/>
      <PickoftheDay/>
      <Comments/>
      <div className='text-center my-3 text-primary small'>Copyright 2022</div>
     </div>
  );
}

export default App;
