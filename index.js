const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

const server = app.listen(8080, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.get('/', (req,res) => {
  res.render('main');
});

// comment for test 