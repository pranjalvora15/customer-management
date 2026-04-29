import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import CustomerForm from './components/CustomerForm';
import CustomerTable from './components/CustomerTable';
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/customers');
      setCustomers(response.data);
    } catch (err) {
      console.error('Failed to fetch customers:', err);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/customers/${id}`);
      fetchCustomers();
    } catch (err) {
      console.error('Failed to delete customer:', err);
    }
  };

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <CustomerForm onCustomerAdded={fetchCustomers} />
        <CustomerTable customers={customers} onDelete={handleDelete} />
      </main>
    </div>
  );
}

export default App;
