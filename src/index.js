import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Home from './home';
import ChangePassword from './changepassword';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AxiosDemo from './axiosdemo';
import MyProfile from './myprofile';
import NewArrivalNotification from  './NewArrivalNotification';
import FeedbackModule from './FeedbackModule';
import ArtworkCard from './ArtworkCard';
import PaymentDetails from './PaymentDetails';


function Website(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/home' element={<Home/>} />
        <Route path='/changepassword' element={<ChangePassword/>} />
        <Route path='/axiosdemo' element={<AxiosDemo/>} />
        <Route path='/myprofile' element={<MyProfile/>} />
        <Route path='/NewArrivalNotification' element={<NewArrivalNotification/>} />
        <Route path='/FeedbackModule' element={<FeedbackModule/>} />
        <Route path='/ArtworkCard' element={<ArtworkCard/>} />
        <Route path="/PaymentDetails" element={<PaymentDetails />} />
      </Routes>
    </BrowserRouter>

    // <div className='full-height'>
    //   <Home/>
    //   <Login/>
    // </div>
  );
}

ReactDOM.render(<Website/>, document.getElementById('root'));