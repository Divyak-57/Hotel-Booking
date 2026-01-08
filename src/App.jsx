import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation} from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import AllRooms from './components/pages/AllRooms';
import RoomDetails from './components/pages/RoomDetails';
import MyBooking from './components/pages/MyBooking';
import HotelReg from './components/HotelReg';
import Layout from './components/hotelOwner/Layout';
import Dashboard from './components/hotelOwner/Dashboard';
import AddRoom from './components/hotelOwner/AddRoom';
import ListRoom from './components/hotelOwner/ListRoom';


const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      { !isOwnerPath && <Navbar/> }
      {false && <HotelReg/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/rooms' element={<AllRooms/>} />
          <Route path='/rooms/:id' element={<RoomDetails/>} />
          <Route path='/my-bookings' element={<MyBooking/>} />
          <Route path='/owner' element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="add-room" element={<AddRoom/>}/>
              <Route path="list-room" element={<ListRoom/>}/>
          </Route>
        </Routes>

      </div>
      <Footer/>
    </div>
  )
}

export default App