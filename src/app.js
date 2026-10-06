require('dotenv').config()
const express = require('express');
const { dbConfig } = require('./config/db');
const app = express()
dbConfig()



module.exports = app