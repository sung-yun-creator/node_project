// 1.mysql2 라이브러리 불러오기
const mysql = require('mysql2');

// 2. 데이터베이스 접속정보를 접근하기 위한 process.env 불러오기
require('dotenv').config();

// 3. ConnectionPool 객체 생성
// - 동시 접속에 대한 처리
// - 접속정보: DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE
// - 옵션: 동시에 최대 객체 연결 갯수, 연결 대기
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10, // 최대 10개 동시 접속 허용
    waitForConnections: true, // 연결이 없을 때 대기할진에 대한 여부
    queueLimit: 0 // 대기열 제한 ( 0 = 무제한 )
});

// 4. pool 객체를 모듈로 내보내기
module.exports = pool.promise();