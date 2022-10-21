const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient


const connectionString = "mongodb+srv://tfuray:<password>l5VSNKDJ8tyl6WsD@100devs.g4m5nvq.mongodb.net/?retryWrites=true&w=majority"