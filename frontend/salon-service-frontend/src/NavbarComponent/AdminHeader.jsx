import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  const navigate = useNavigate();

  const adminLogout = () => {
    toast.success("Logged out successfully!", {
      position: "top-center",
      autoClose: 1000,
    });

    sessionStorage.removeItem("active-admin");

    setTimeout(() => {
      navigate("/home");
      window.location.reload();
    }, 1000);
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link to="/admin/add-location" className="nav-link active">
          <b className="text-color">Add Location</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/add-facility" className="nav-link active">
          <b className="text-color">Add Facility</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/salon/register" className="nav-link active">
          <b className="text-color">Register Salon Manager</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/salon/register" className="nav-link active">
          <b className="text-color">Add Salon</b>
        </Link>
      </li>

      {/* ✅ NEW – VIEW SALON MANAGERS */}
      <li className="nav-item">
        <Link to="/admin/salon-users" className="nav-link active">
          <b className="text-color">Salon Managers</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/admin/booking/all" className="nav-link active">
          <b className="text-color">All Bookings</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/customer/view" className="nav-link active">
          <b className="text-color">Customers</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="#" className="nav-link active" onClick={adminLogout}>
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
