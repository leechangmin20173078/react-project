const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;


const sequelize = require('./models').sequelize;
sequelize.sync();

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.json());

const {
    changboard,
    Sequelize: { Op }
  } = require('./models');
sequelize.query('SET NAMES utf8;');

app.post('/add/data', (req, res) => {
    console.log(req.body)

      changboard.create({
          title : req.body.title,
          content : req.body.content
      })
      .then( result => {
          res.send(result)
      })
      .catch( err => {
          console.log(err)
          throw err;
      })
}) 



app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})