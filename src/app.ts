import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// app.use("/api/auth", AuthRoutes);


app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Greenhouse Nursery Project!");
});

// app.use("*", NotFound);
// app.use(globalErrorHandler)
export default app;