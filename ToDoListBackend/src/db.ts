import { dot } from "node:test/reporters";
import { Pool, QueryResult } from "pg";
const dotenv = require("dotenv").config().parsed;

const pool = new Pool({
  user: dotenv.DB_USER,
  host: dotenv.DB_HOST,
  database: dotenv.DB_DATABASE,
  password: dotenv.DB_PASSWORD,
  port: dotenv.DB_PORT,
});

export const query = (text: string, params?: any[]): Promise<QueryResult> => {
  console.log(dotenv.DB_USER);
  console.log(dotenv.DB_HOST);
  console.log(dotenv.DB_DATABASE);
  console.log(dotenv.DB_PASSWORD);
  console.log(dotenv.DB_PORT);
  console.log("Executing query:", text, "with params:", params);

  return pool.query(text, params);
};
