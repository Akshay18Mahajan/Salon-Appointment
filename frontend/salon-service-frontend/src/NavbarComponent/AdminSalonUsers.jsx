import { useEffect, useState } from "react";
import axios from "axios";

const AdminSalonUsers = () => {
  const [salonUsers, setSalonUsers] = useState([]);

  useEffect(() => {
    fetchSalonUsers();
  }, []);

  const fetchSalonUsers = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/user/fetch/role-wise?role=Salon"
    );
    setSalonUsers(response.data.users);
  };

  return (
    <div className="container mt-3">
      <h3>Salon Managers</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {salonUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.emailId}</td>
              <td>{user.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminSalonUsers;
