import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Dms from './components/Dms/Dms';
import Chcn from './components/Chcn/Chcn';
import Ldms from './components/Ldms/Ldms';
import Admission from './components/Admission/Admission';
import StudentResult from './components/StudentResult/StudentResult';
import AboutUs from './components/AboutUs/AboutUs';
import Notfound from './components/Notfound/Notfound';
import FooterPage from './components/FooterPage/FooterPage';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';

function App() {
  return (
    <div >

      <Header />
       
       <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/dms' element={<Dms />}></Route>
          <Route path='/chcn' element={<Chcn />}></Route>
          <Route path='/ldms' element={<Ldms />}></Route>
          <Route path='/admission' element={ <Admission /> }></Route>
          <Route path='/application' element={ <ApplicationForm /> }> </Route>
          <Route path='/student-result' element={<StudentResult />}></Route>
          <Route path='/about-us' element={<AboutUs />}></Route>
          <Route path='*' element={<Notfound />}> </Route>
       </Routes>

       <FooterPage />
       
    </div>
  );
}

export default App;
