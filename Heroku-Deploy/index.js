const express = require("express")
const app = express();

app.get('/', (req, res) => {
  res.status(200).send("Hello World").end();
})

app.listen(3000, () => { console.log(`App listening on port ${PORT}`  )})
