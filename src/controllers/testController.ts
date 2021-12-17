import { Request, Response } from "express";
import { testSchema } from "../schemas/testSchema";
import * as testService from "../services/testService";

async function createTest (req: Request, res: Response) {
    try {
      if (testSchema.validate(req.body).error) return res.sendStatus(403);
      
      const created = await testService.createTest(req.body);

      if (!created) {
        return res.sendStatus(409);
      }

      res.sendStatus(201);
  } catch (err) {
      console.error(err);
      res.sendStatus(500);
  }
}

export { createTest };