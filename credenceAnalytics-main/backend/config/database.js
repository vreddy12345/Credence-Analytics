const mongoose = require('mongoose');

const connecDatabase = () =>{
    mongoose.set("strictQuery",false);
    mongoose.connect("mongodb+srv://sumanyadav:Suman56@cluster0.ajyqyfi.mongodb.net/backendmovies?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
        (data)=>{
            console.log(`MongoDB connected with server: ${data.connection.host}`);
        }).catch((err) =>{
            console.log(err);

        })
}

module.exports = connecDatabase
