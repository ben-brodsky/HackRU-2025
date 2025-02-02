import express from 'express';
import path from 'path';
import cors from "cors";
import { fileURLToPath } from 'url';
import { addUsername, addPassword, getJobListings, addJobListing } from "./database.js";
import { create } from 'domain';

const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(express.static("public"))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/jobs/:category/:username", async (req, res) => {
    const username = req.params.username;
    const category = req.params.category;
    const listings = await getJobListings(postID)
    res.status(200).json({listings: listings})
})

app.post("/addjob", async (req, res) => {
    const {companyName, jobTitle} = req.body
    await addJobListing(companyName, jobTitle)
    res.status(200).send({status: "recieved"})
})

app.listen(port, () => {
    console.log("Server is running on port " + port);
})