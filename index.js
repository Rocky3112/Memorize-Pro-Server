import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xn4aldo.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(()=> app.listen(PORT, ()=> console.log(`server is running on port: {PORT}`)))
.catch((error)=> console.log(error.message));