import express from "express";
import bodyParser from "body-parser";
import { createWalletClient, http } from "viem";
import { wrapFetchWithPayment } from "x402-fetch";
import { polygonAmoy } from "viem/chains";

const app = express();
app.use(bodyParser.json());

app.post("/api/deposit-fund", async (req, res) => {

})

app.listen()
