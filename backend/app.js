require('dotenv').config();
const express = require('express');
const cors = require('cors');
const loginController = require('./src/controllers/loginController');
const requestController = require('./src/controllers/requestController');
const EmployeeController = require('./src/controllers/EmployeeController');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API login
app.post('/api/login', loginController.login);

// เชื่อมต่อ requestController เพื่อจัดการ request อื่นๆ
app.use('/api', requestController);
app.use('/api', EmployeeController)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
