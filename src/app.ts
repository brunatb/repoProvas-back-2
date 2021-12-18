import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as testController from "./controllers/testController";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/test", testController.createTest);
app.get('/test/params', testController.findAvailableTestParams);

export async function init () {
  await connectDatabase();
}

export default app;
