import React, { useEffect, useState } from 'react'
import './App.css';
import Main from './Main';

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("https://randomuser.me/api/?results=10")
      .then(res => res.json())
      .then(res => {
        setData(res.results);
        setLoading(true);
      });
  }

  return (
    <div className="App">
      {loading ? <Main data={data} /> : <div>Loading...</div>}    
    </div>
  );
}

export default App;
