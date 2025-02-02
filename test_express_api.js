import express from 'express';
import path from 'path';
import cors from "cors";
import { fileURLToPath } from 'url';
import {getPosts, getPostFromID, createPost, getCommentsUnderPost, createComment, getExpandedComments} from "./database.js";
import { create } from 'domain';

const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(express.static("public"))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/posts", async (req, res) => { 
    const result = await getPosts()
    res.status(200).json({posts: result})
})

app.get("/post", async (req, res) => {
   res.sendFile(__dirname + "/views/post.html")
})

app.get("/post/:id", async (req, res) => {
    const postID = req.params.id
    const post = await getPostFromID(postID)
    const comments = await getCommentsUnderPost(postID)
    res.status(200).json({post: post, comments: comments})
})

app.post("/post/:id/:cid", async (req, res) => {
    const postID = req.params.id
    const commentID = req.params.cid
    const {contents} = req.body
    await createComment(contents, postID, commentID)
    res.status(200).send({status: "recieved"})
})

app.post("/post", async (req, res) => {
    const {title, content} = req.body
    await createPost(title, content)
    res.status(200).send({status: "recieved"})
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something Broke")
})

app.listen(port, () =>{
    console.log("Server is running on port", port)
})