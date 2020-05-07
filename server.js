const express = require('express')

const app = express();
const path = require('path');

const port = 3000;

app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());

app.get('/api/smego', (req,res) => {
  console.log('hi');
  res.end();
});

app.listen(port, () => {
  console.log(`listening on ${port}`)
});
