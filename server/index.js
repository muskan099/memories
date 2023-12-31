import express from 'express';
import bodyParser  from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from "./routes/posts.js";
//nodejs is javascript backend runtime enviroment
//express is a nodejs framework
const app = express();


//body-parser enables us to send post requests
app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(cors());

app.use('/posts', postRoutes)

const CONNECTION_URL = "mongodb+srv://muskankapoor:muskankapoor14@cluster0.l4rrzhx.mongodb.net/"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{})
.then(() => app.listen(PORT,() => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message) );

// mongoose.set('useFindAndModify', false)