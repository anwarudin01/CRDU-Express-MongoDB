import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import './index.scss';

const Tambah = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const navigate = useHistory();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name,
        price,
        stock,
      });
      navigate.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={saveUser}>
          <Input name="name" type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} placeholder="Nama Produk..." label="Nama" />
          <Input name="price" type="number" defaultValue={price} onChange={(e) => setPrice(e.target.value)} placeholder="Harga Produk..." label="Harga" />
          <Input name="Stock" type="number" defaultValue={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock Produk..." label="Stock" />
          <Input name="status" type="checkbox" label="Active" defaultChecked />
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tambah;
