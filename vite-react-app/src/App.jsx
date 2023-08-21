import {Routes, Route } from 'react-router-dom'
import './apx.css'
import AllCountries from './components/AllCountries/AllCountries'
import CountryInfo from './components/CountryInfo/CountryInfo'
import SearchInput from './components/Search/SearchInput'



function App() {
  return (
  <>
  <div className="header">
    <div className="container">
      <h3>Where in the world??</h3>
    </div>
  </div>
  <div className="container">
    <Routes>
      <Route path='/' element={<AllCountries />} />
      <Route path='/country/:countryName' element={<CountryInfo/>}/>
    </Routes>
  </div>
  </>
  );
}

export default App
