const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

let customers = [];

app.get('/customers', (req, res) => {
  res.json(customers);
});

app.post('/customers', (req, res) => {
  const name = req.body.name?.trim();
  const email = req.body.email?.trim();
  const phone = req.body.phone?.trim();
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (!/^[789]\d{9}$/.test(phone)) {
    return res.status(400).json({ error: 'Invalid phone number' });
  }
  const newCustomer = { id: uuidv4(), name, email, phone };
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

app.delete('/customers/:id', (req, res) => {
  const { id } = req.params;
  customers = customers.filter(c => c.id !== id);
  res.json({ message: 'Customer deleted successfully' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
