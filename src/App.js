import { useState } from 'react';
import Forecasts from './Component/Forecasts';
import Home from './Home';


const App = () => {
  const [search, setSearch] = useState('Mumbai');

  return (
    <>
      <input
        type="text"
        id="cityInput"
        style={{ width: "99vw", color: "#fff", background: "#0000005c" }}
        onChange={(e) => { setSearch(e.target.value) }}
        placeholder='Search City!'
      />
      <div style={{ 'display': 'flex' }}>
        <Home search={search} />
        <Forecasts search={search} />
      </div>
    </>
  );
};

export default App;
