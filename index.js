const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');


const app = express();
 

const routes = require('./routes');

const PORT = process.env.PORT || 3001;

 const routet = require('./client/public/index.html')

// Setup middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, './client/public/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

app.use("/",routes);
require('./services/passport');
// Connect database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/userstockitem', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

app.listen(PORT,()=>{
  console.log(`listening on PORT ${PORT}`)
});
