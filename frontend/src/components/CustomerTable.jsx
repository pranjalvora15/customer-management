import React from 'react';
import './CustomerTable.css';

function CustomerTable({ customers, onDelete, loading, deletingId }) {
  if (loading) {
    return (
      <div className="table-container">
        <h2>Customer List</h2>
        <div className="loading-wrapper">
          <div className="spinner"></div>
          <p>Loading customers...</p>
        </div>
      </div>
    );
  }

  if (customers.length === 0) {
    return (
      <div className="table-container">
        <h2>Customer List</h2>
        <p className="empty-msg">No customers yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <h2>Customer List</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer.id} className={index % 2 === 0 ? 'row-even' : 'row-odd'}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => onDelete(customer.id)}
                    disabled={deletingId === customer.id}
                  >
                    {deletingId === customer.id ? 'Deleting...' : 'Delete'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerTable;
