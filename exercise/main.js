import mongoose from "mongoose";
import express from "express";
import ejs from "ejs";
import {ex} from "./models/exr.js";

const app = express()
const port = 3000
mongoose.connect('mongodb://localhost:27017/exercise');


app.get('/home', (_, res) => {
  ejs.renderFile('views/index.ejs', { title: 'Hello World' }, (err, str) => {
    if (err) {
      res.status(500).send('Error rendering template');
    } else {
      res.send(str);
    }
  })})

app.get('/generate', async (_, res) => {

  try {
    await ex.deleteMany();
    for (let i = 0; i < 10; i++) {
        const employee = new ex({
          name:  ['raj', 'ravi', 'jhon'][Math.floor(Math.random() * 3)],
          salary: Math.floor(Math.random() * 100000),
          language: ['JavaScript', 'Python', 'Java'][Math.floor(Math.random() * 3)],
          city: ['New York', 'Los Angeles', 'Chicago'][Math.floor(Math.random() * 3)],
          ismanager: Math.random() < 0.5
        });
        await employee.save();
        console.log(`Employee ${i + 1} saved:`, employee);
        console.log("action completed");
    }
    ejs.renderFile('views/success.ejs', {}, (err, str) => {
      if (err) {
        res.status(500).send('Error rendering success template');
      } else {+
        res.send(str);
      }
    });
  } catch (err) {
    ejs.renderFile('views/opfailed.ejs', { error: err.message }, (renderErr, str) => {
      if (renderErr) {
        res.status(500).send('Error');
      } else {
        res.status(500).send(str);
      }
    });
  }
});




app.get('/data', (req, res) => {
  ejs.renderFile('views/dataschema.ejs', {}, (err, str) => {
    if (err) {
      res.status(500).send('Error rendering 404 template');
    } else {
      res.send(str); // 200 OK
    }
  });
});

app.get('/:slug', (req, res) => {
  ejs.renderFile('views/404.ejs', {}, (err, str) => {
    if (err) {
      res.status(500).send('Error ');
    } else {
      res.status(404).send(str);
    }
  });
});



  

 
app.listen(port, () => {
  console.log(`local app listening on port ${port}`)
})
