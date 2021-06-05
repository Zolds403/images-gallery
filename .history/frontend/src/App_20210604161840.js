//jshint esversion: 8 
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const handleSearchSubmit = (e) => {
  e.preventDefault();
  console.log(e.target);
}

const App = () => {

  const [word, setWord] = useState('');
  return (
    <div>
     <Header title="Images Gallery"/>
     <Search handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
