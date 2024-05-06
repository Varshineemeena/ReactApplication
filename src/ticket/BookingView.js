import React, { useEffect, useState } from 'react'
import axios from "axios";
import {FaEdit, FaEye, FaTrashAlt} from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';
import Search from '../common/Search';
import BookingService from '../service/BookingService';


 
const BookingView = () => {
   const[Booking,setBooking]=useState([]);
   const[search,setSearch]=useState("");
 
    useEffect(() =>{
        loadBooking();
    },[])
 
   const loadBooking=async()=>{
    await BookingService.BookingGetAll().then((response)=>{
      setBooking(response.data)
    })
  }
 
 
 
  const handleDelete =  (id)=>{
     console.log(id);
      BookingService.DeleteEmpList(id).then((response)=>{
    // setBooking(response.data);
    console.log(response.data);
    let stu = Booking.filter((Booking)=> {
      console.log(Booking.id)
      } );
    setBooking(stu);
 
    });
 
  //  window.location.reload();
}
 
   
 
 
  return (
    <section>
      <Search 
        search={search}
        setSearch={setSearch} 
        />
      <table className="table table-striped  table-hover shadow">
        <thead>        
       <div data-testid="Addbookingbtn">
        <Link
                                className="btn btn-primary mx-2"
                                to={"/add-booking"} >
                                Add Booking Details
                            </Link>
                            </div>
            <tr className="text-center">
 
             <th role='bookingidtest'>Booking Id</th>
             <th role='departuretest'>Departure</th>
             <th role='destinationtest'>Destination</th>
             <th role='busidtest'>Bus Id</th>
             <th role='useridtest'>User Id</th>
             <th colSpan="3">Action</th>
 
            </tr>
        </thead>
        <tbody className="text-center">
           
            {Booking
            .map((Bookings)=>(
            <tr key={Bookings.id}>
               
                   <td>{Bookings.id}</td>
               
             
              <td>{Bookings.departure}</td>
              <td>{Bookings.destination}</td>
              <td>{Bookings.bus.id}</td>
              <td>{Bookings.user.id}</td>
             
             
              <td className="mx-2"  >
          
              <Link  to={`/booking-profile/${Bookings.id}`} className="btn btn-info" ><FaEye/> View</Link> </td>

                <td className="mx-2">
                <button className="btn btn-danger"
                onClick={()=>{
                  console.log(Bookings.id)
 
                  handleDelete(Bookings.id)}}> <FaTrashAlt/> Delete </button>
               
                 </td>
               
           </tr>
            ))}
           
 
 
        </tbody>
       
        </table>
    </section>
  )
}
 
export default BookingView