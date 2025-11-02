// The address of this server connected to the network is: 
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require('express')
const app = express()
const PORT = 8383

let data = ['james']

// Middleware
app.use(express.json())




// ENDPOINT - HTTP VERBS (method) && Routes (or paths)
// The method informs the nature of request and the route is a further subdirectory (basically we direct the request to the body of code to respond appropriately, and these locations or routes are called endpoints)

// Type 1 - Website endpoints (these endpoints are for sending back html and they typically come when a user enters a url in a browser)

app.get('/', (req, res) => {
    console.log('User requested the home page website')
    res.send(`
        <body style="background:pink;color: blue;">
        <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        <script>console.log('This is my script')</script>
        `)
})

app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
        <h1>dashboard</h1>
        <a href="/">home</a>
        </body>
        
        
        `)
})

// Type 2 - API endpoints (non visual)

//CRUD-method create-post read-get update-put and delete-delete

app.get('/api/data', (req, res) => {
    console.log('This one was for data')
    res.status(599).send(data)
})

app.post('/api/data', (req, res) => {
    // someone wants to create a user (for example when they click a sign up button)
    // the user clicks the sign up button after entering their credentials, and their browser is wired up to send out a network request to the server to handle that action
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('We deleted the element off the end of the array')
    res.sendStatus(203)
})


// Health endpoint with error handling
app.get('/health', (req, res) => {
  try {
    res.status(200).json({
      status: 'ok',
      uptime: process.uptime(),
      version: '1.0.0',
      message: 'Server is running smoothly',
    });
  } catch (error) {
    console.error('Health check failed:', error);

    res.status(500).json({
      status: 'error',
      message: 'Health check failed',
      error: error.message,
    });
  }
});




// Mock database for car events
let cars = [
  {
    car_id: 'C001',
    serial_number: 'SN12345',
    entry_time: '2025-10-26T09:00:00Z',
    exit_time: null,
  },
];

// GET - fetch all car events
app.get('/api/cars', (req, res) => {
  try {
    res.status(200).json({
      status: 'ok',
      count: cars.length,
      data: cars,
    });
  } catch (error) {
    console.error('Error fetching car list:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch cars' });
  }
});

// POST - add a new car event
app.post('/api/cars', (req, res) => {
  try {
    const { car_id, serial_number, entry_time, exit_time } = req.body;

    // Basic validation
    if (!car_id || !serial_number || !entry_time) {
      return res
        .status(400)
        .json({ status: 'error', message: 'Missing required fields' });
    }

    const newCar = { car_id, serial_number, entry_time, exit_time: exit_time || null };
    cars.push(newCar);

    console.log('New car added:', newCar);
    res.status(201).json({ status: 'ok', message: 'Car event added', data: newCar });
  } catch (error) {
    console.error('Error adding car:', error);
    res.status(500).json({ status: 'error', message: 'Failed to add car' });
  }
});



app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))