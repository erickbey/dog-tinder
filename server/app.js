const express = require('express');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');

dotenv.config({ path: "../config.env" });

const app = express();

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMS: 60 *60 * 1000, 
  message: 'Too many requests from this IP, please try again in an hour'
});

app.use('/api', limiter);

app.use(cors());

app.options('*', cors());

// Body parser, reading data from the body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());


// Connection to Database
const MONGO_URI = process.env.DB_URI;

if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to Database'))
.catch(error => console.error('Mongo Connection Error', error));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

//Routes 
app.use('api/v1/users', userRouter)