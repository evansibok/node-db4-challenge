const app = require('./data/api/server.js/index.js');

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`* Listening on ${PORT} *`);
})