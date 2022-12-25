import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  //Memanggil data yang ada pada API
  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUser(response.data);
  };

  // Menghapus data yang ada pada API
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">
        Tamah Produk
      </Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..." />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td className="text-right">{user.price}</td>
              <td className="text-center">
                <Link to={`/detail/${user._id}`} className="btn btn-sm btn-info">
                  Detail
                </Link>
                <Link to={`/edit/${user._id}`} className="btn btn-sm btn-warning">
                  Edit
                </Link>
                <Link to="#" onClick={() => deleteUser(user._id)} className="btn btn-sm btn-danger">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
