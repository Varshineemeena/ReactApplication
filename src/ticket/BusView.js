import React, { useEffect, useState } from 'react'
import axios from "axios";
import {FaEdit, FaEye, FaTrashAlt} from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';
import Search from '../common/Search';
import BusService from '../service/BusService';



 
 
 
const BusView = () => {
   const[Bus,setBus]=useState([]);
   const[search,setSearch]=useState("");
 
    useEffect(() =>{
        loadBus();
    },[])
 
   const loadBus=async()=>{
    await BusService.BusGetAll().then((response)=>{
      setBus(response.data)
    })
  }
 
 
 
  

 
   
 
 
  return (
    <section>
      <Search search={search}
      setSearch={setSearch}
      />
      <table className="table table-striped  table-hover shadow">
        <thead>        
       <div data-testid="addbusbtn">
        <Link
                                className="btn btn-primary mx-2"
                                to={"/add-bus"}>
                                Add Bus Details
                            </Link>
                            </div>
            <tr className="text-center">
 
             <th role='busidtest'>Bus Id</th>
             <th role='busnametest'>Name</th>
             <th role='bustypetest'>Bus Type</th>
             <th role='seattypetest'>Seat Type</th>
             
             
 
            </tr>
        </thead>
        <tbody className="text-center">
           
            {Bus
            .map((Buss)=>(
            <tr key={Buss.id}>
               
                   <td>{Buss.id}</td>
               
             
              <td>{Buss.name}</td>
              <td>{Buss.busType}</td>
              <td>{Buss.seatType}</td>
              
             
             
              
           </tr>
            ))}
           
 
 
        </tbody>
       
        </table>
    </section>
  )
            }
 
export default BusView