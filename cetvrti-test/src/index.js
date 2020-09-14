import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Flag from './components/Flag';
import Select from './components/Select';
import { getAllCountries } from './service';
import './index.css'
import Button from './components/Button';

const App = () => {

  const [countries,setCountries] = useState([]);
  const [region,setRegion] = useState('')

  useEffect(() => {
    getAllCountries().then(res => {
      setCountries(res.data)
    })
  },[])
 

  return (
    <>
    <Button />
    <Select countries={countries} setRegion={setRegion} />    
    <Flag countries={countries} region={region} />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


