const express = require('express');
const cors = require('cors');

const app = express();

const port = 3000;

const dataSet = [
    {"f_name": "바나나", "count": 10},
    {"f_name": "참외", "count": 5},
    {"f_name": "딸기", "count": 8}
];

app.use(cors());

app.get('/api/list', (req, res) => {
  console.log("요청이 들어옴...");
  res.send(dataSet);
});


app.listen(port, () => {
  console.log(`${port}번 포트 실행중...`);
});