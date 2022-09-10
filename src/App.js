import React from 'react';
import './App.css';
import Heading from './Components/Heading';
import ShowCase from './Components/ShowCase';
import Data from './Data';

const App = ()=> {
  return (
    <>
    <Heading />

    <div className='cakeDisplay'>

      {Data.map((val) => {
        return (
          <ShowCase key={val.id} name={val.name} imgsrc={val.imgsrc} />
        );
      })
      }

    </div>
  </>
  );
}

export default App;
