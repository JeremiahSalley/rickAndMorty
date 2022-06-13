import React, { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import Paginations from './components/Paginations/Paginations';
import { Pagination } from 'react-bootstrap';


function App() {
  let [pageNumber, setPageNumber] = useState(1)
  let [fetchedData, updateFetchedData] = useState([])
  let { info, results } = fetchedData
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() =>{

    (async function(){
      let data = await fetch(api).then(res =>res.json())
      updateFetchedData(data)
    })()
  },[api])

  return (
    <div className="App">
      <h1 className='text-center ubuntu my-4'>Rick & Morty <sapn className='text-primary'>WiKi</sapn></h1>

      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <Filters />
          </div>
          <div className="col-lg-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Paginations pageNumber={pageNumber}setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
