import express from "express";
import signale from "signale";
import { productsRouter } from "./v1/router/productsRouter.js";

const app = express()

app.use(express.json())
app.use("/api/v1/products",productsRouter);

app.listen(3000, ()=> {
    signale.success("Server online in port 3000")
})