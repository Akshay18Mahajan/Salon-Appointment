import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const ViewMySalonBookings = () => {
  // Retrieve user from session
  const user = JSON.parse(sessionStorage.getItem("active-salon"));

  const [allBookings, setAllBookings] = useState([]);
  const [bookingStatus, setBookingStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Guard clause: stop if user is not logged in or doesn't have an ID
      // This prevents the "Cannot read properties of null (reading 'id')" error
      if (!user || !user.id) {
        console.error("No active salon manager session found!");
        return;
      }

      await getAllBooking();
      await getAllBookingStatus();
    };

    fetchData();
  }, []);

 const retrieveAllBooking = async () => {
  if (!user || !user.id) return { bookings: [] };

  // This MUST match the @RequestParam("salonUserId") in your BookingController
  const response = await axios.get(
    `http://localhost:8080/api/book/salon/fetch/bookings?salonUserId=${user.id}`
  );
  return response.data;
};

  const retrieveAllBookingStatus = async () => {
    // This call matches the new /fetch/status endpoint in your backend
    const response = await axios.get(
      "http://localhost:8080/api/book/salon/fetch/status"
    );
    return response.data;
  };

  const getAllBooking = async () => {
    try {
      const allBooking = await retrieveAllBooking();
      if (allBooking && allBooking.bookings) {
        setAllBookings(allBooking.bookings);
      }
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    }
  };

  const getAllBookingStatus = async () => {
    try {
      const allBookingStatus = await retrieveAllBookingStatus();
      if (allBookingStatus) {
        setBookingStatus(allBookingStatus);
      }
    } catch (error) {
      console.error("Failed to fetch status:", error);
    }
  };

  return (
    <div className="mt-3">
      <div className="card form-card mb-5 custom-bg border-color" style={{ height: "45rem" }}>
        <div className="card-header custom-bg-text text-center bg-color">
          <h2>Salon Bookings</h2>
        </div>
        <div className="card-body" style={{ overflowY: "auto" }}>
          <div className="table-responsive">
            <table className="table table-hover text-color text-center">
              <thead className="table-bordered border-color bg-color custom-bg-text">
                <tr>
                  <th scope="col">Salon</th>
                  <th scope="col">Salon Name</th>
                  <th scope="col">Salon Email</th>
                  <th scope="col">Booking Id</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Customer Contact</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time Slot</th>
                  <th scope="col">Total Amount</th>
                  <th scope="col">Booking Status</th>
                </tr>
              </thead>
              <tbody>
                {allBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>
                      <img
                        src={`http://localhost:8080/api/salon/${booking.salonImage}`}
                        className="img-fluid"
                        alt="salon_pic"
                        style={{ maxWidth: "90px" }}
                      />
                    </td>
                    <td><b>{booking.salonName}</b></td>
                    <td><b>{booking.salonEmail}</b></td>
                    <td><b>{booking.bookingId}</b></td>
                    <td><b>{booking.customerName}</b></td>
                    <td><b>{booking.customerContact}</b></td>
                    <td><b>{booking.date}</b></td>
                    <td><b>{booking.timeSlot}</b></td>
                    <td><b>{booking.totalAmount}</b></td>
                    <td><b>{booking.status}</b></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMySalonBookings;