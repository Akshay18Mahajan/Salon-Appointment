import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./NavbarComponent/Header";
import HomePage from "./page/HomePage";
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";

import AddLocation from "./LocationComponent/AddLocation";
import AddFacility from "./FacilityComponent/AddFacility";
import AddSalonForm from "./SalonComponent/AddSalonForm";
import UserRegister from "./UserComponent/UserRegister";
import UserLoginForm from "./UserComponent/UserLoginForm";

import Salon from "./SalonComponent/Salon";
import AddSalonFacilities from "./FacilityComponent/AddSalonFacilities";
import AddSalonReview from "./SalonReviewComponent/AddSalonReview";

import ViewAllBooking from "./BookingComponent/ViewAllBooking";
import ViewMyBooking from "./BookingComponent/ViewMyBooking";
import ViewMySalonBookings from "./BookingComponent/ViewMySalonBookings";
import VerifyBooking from "./BookingComponent/VerifyBooking";

import ViewAllCustomers from "./UserComponent/ViewAllCustomers";
import MyWallet from "./UserComponent/MyWallet";

/* ✅ NEW COMPONENT (you will add next) */
// import AdminSalonUsers from "./UserComponent/AdminSalonUsers";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* AUTH */}
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/user/customer/register" element={<UserRegister />} />
        <Route path="/user/salon/register" element={<UserRegister />} />
        <Route path="/user/admin/register" element={<UserRegister />} />

        {/* ADMIN */}
        <Route path="/admin/add-location" element={<AddLocation />} />
        <Route path="/admin/add-facility" element={<AddFacility />} />
        <Route path="/admin/salon/register" element={<AddSalonForm />} />
        {/* <Route path="/admin/salon-users" element={<AdminSalonUsers />} /> */}

        <Route path="/user/admin/booking/all" element={<ViewAllBooking />} />
        <Route path="/customer/view" element={<ViewAllCustomers />} />

        {/* SALON */}
        <Route path="/salon/:salonId/add/facility" element={<AddSalonFacilities />} />
        <Route path="/salon/:salonId/location/:locationId/add/review" element={<AddSalonReview />} />
        <Route path="/salon/:salonId/location/:locationId" element={<Salon />} />

        <Route path="/user/salon/bookings" element={<ViewMyBooking />} />
        <Route path="/user/salon/bookings/all" element={<ViewMySalonBookings />} />
        <Route path="/salon/verify/booking/:bookingId" element={<VerifyBooking />} />

        {/* WALLET */}
        <Route path="/salon/earnings/view" element={<MyWallet />} />

        {/* LOCATION FILTER */}
        <Route path="/home/all/salon/location" element={<HomePage />} />
        <Route path="/home/salon/location/:locationId/:locationName" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
