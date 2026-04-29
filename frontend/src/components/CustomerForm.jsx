import React, { useState } from 'react';
import axios from 'axios';
import './CustomerForm.css';

function CustomerForm({ onCustomerAdded }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('All fields are required.');
      return;
    }
    if (!/^[789]\d{9}$/.test(phone.trim())) {
      setError('Phone number must be 10 digits and start with 7, 8, or 9.');
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/customers`, { name, email, phone });
      setName('');
      setEmail('');
      setPhone('');
      setError('');
      onCustomerAdded();
    } catch (err) {
      setError('Failed to add customer. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Customer</h2>
      {error && <p className="error-msg">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={submitting}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={submitting}
          />
        </div>
        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? 'Adding...' : 'Add Customer'}
        </button>
      </form>
    </div>
  );
}

export default CustomerForm;
