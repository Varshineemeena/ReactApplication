import React, {
    useEffect,
    useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookingService from "../service/BookingService";


 
const FindBooking = () => {
    const { id } = useParams();
    let navigate=useNavigate();
    const [Booking, setBooking] = useState({
        departure:"",
        destination:"",
      
      bus:{
        id:0,
        name: "",
        busType: "",
        seatType: ""
        
      },

      user:{
        id:0,
        name: "",
        city: "",
        phone: "",
        email: ""
      }
    });
 
    useEffect(() => {
        loadBooking();
    }, []);
 
    const loadBooking=async()=>{
        await BookingService.ViewBooking(id).then((response)=>{
          setBooking(response.data)
        //   navigate("/view-students");
        })
      }
 
     
 
     
 
 
    return (
        <section
       
            className="shadow"
            style={{ backgroundColor: "whitesmoke" }}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle img-fluid"
                                    style={{ width: 150 }}
                                />
                                <h5 className="my-3">
                                    {`${Booking.id} ${Booking.departure} ${Booking.destination}  `}
                                </h5>
                                <div className="d-flex justify-content-center mb-2">
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary" role="callbtn">
                                        Call
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-warning ms-1" role="messagebtn">
                                        Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
 
                    <div className="col-lg-9">
                        <div className="card mb-4">
                            <div className="card-body">
                                
                                <div className="row">
                                    <div className="col-sm-3" role="useridtest">
                                        <h5 className="mb-0">
                                            UserId
                                        </h5>
                                    </div>
 
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            {Booking.user.id}
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-3" role="usernametest">
                                        <h5 className="mb-0">
                                            UserName
                                        </h5>
                                    </div>
 
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            {Booking.user.name}
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3" role="citytest">
                                        <h5 className="mb-0">
                                            City
                                        </h5>
                                    </div>
 
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            {Booking.user.city}
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3" role="phonetest">
                                        <h5 className="mb-0">
                                            Phone
                                        </h5>
                                    </div>
 
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0" >
                                            {Booking.user.phone}
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3" role="emailtest">
                                        <h5 className="mb-0">
                                            Email
                                        </h5>
                                    </div>
 
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            {Booking.user.email}
                                        </p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3" role="busidtest">
                                        <h5 className="mb-0">
                                            BusID
                                        </h5>
                                    </div>
 
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            {Booking.bus.id}
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3" role="busnametest">
                                        <h5 className="mb-0">
                                            Bus Name
                                        </h5>
                                    </div>
 
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            {Booking.bus.name}
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3" role="bustypetest">
                                        <h5 className="mb-0">
                                            Bus Type
                                        </h5>
                                    </div>
 
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            {Booking.bus.busType}
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3" role="seattypetest">
                                        <h5 className="mb-0">
                                            Seat Type
                                        </h5>
                                    </div>
 
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            {Booking.bus.seatType}
                                        </p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3" role="departuretest">
                                        <h5 className="mb-0">
                                            Departure
                                        </h5>
                                    </div>
 
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            {Booking.departure}
                                        </p>
                                    </div>
                                </div>
 
                                <hr />
                                
 
                                <div className="row">
                                    <div className="col-sm-3" role="destinationtest">
                                        <h5 className="mb-0">
                                            Destination
                                        </h5>
                                    </div>
 
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            {Booking.destination}
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mb-2">
                                    <button
                                        name="back"
                                        type="button"
                                        className="btn btn-outline-primary" role="callbtn">
                                        Back
                                    </button>
                                </div>
                                
 
                               
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
 
export default FindBooking;