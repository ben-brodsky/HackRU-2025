import mysql from 'mysql2'
import dotenv from "dotenv"
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 10
}).promise()

export async function getPosts()
{
    const [result] = await pool.query("SELECT * FROM posts")
    return result
}

export async function getPostFromID(id)
{
    const [result] = await pool.query("SELECT * FROM posts WHERE ID = ?", [id])
    return result[0]
}

export async function getCommentFromID(id)
{
    const [result] = await pool.query("SELECT * FROM comments WHERE ID = ?", [id])
    const comment = {
        ID: result.ID,
        Username: result.Username,
        Contents: result.Contents,
        PostID: result.PostID,
        ParentID: result.ParentID,
        Replies: []
    }

    return comment
}

export async function getCommentsUnderPost(id)
{
    const [result] = await pool.query("SELECT * FROM comments WHERE PostID = ?", [id])

    var comments = []

    for(let i = 0; i < result.length; i++)
    {
        if (result[i].ParentID == 0)
        {
            comments.push({
                ID: result[i].ID,
                Username: result[i].Username,
                Contents: result[i].Contents,
                PostID: result[i].PostID,
                ParentID: result[i].ParentID,
                Replies: []
            })
        }
    }

    await populateReplies(comments)
    return comments
}

export async function getExpandedComments(id)
{
    const [result] = await pool.query("SELECT * FROM comments WHERE ID = ?", [id])

    var comments = []

    for(let i = 0; i < result.length; i++)
    {
        if (result[i].ID == result[0].ID)
        {
            comments.push({
                ID: result[i].ID,
                Username: result[i].Username,
                Contents: result[i].Contents,
                PostID: result[i].PostID,
                ParentID: result[i].ParentID,
                Replies: []
            })
        }
    }

    await populateReplies(comments)

    return comments
}

export async function getRepliesUnderComment(id)
{
    const [result] = await pool.query("SELECT * FROM comments WHERE ParentID = ?", [id])

    var replies = []

    for(let i = 0; i < result.length; i++)
    {
        replies.push({
            ID: result[i].ID,
            Username: result[i].Username,
            Contents: result[i].Contents,
            PostID: result[i].PostID,
            ParentID: result[i].ParentID,
            Replies: []
        })
    }

    return replies
}

export async function createPost(title, contents, username,)
{
    const [result] = await pool.query("INSERT INTO posts (Username, Title, Contents) VALUES ('automatic', ?, ?)", [title, contents])
    const id = result.insertId
    return getPostFromID(id)
}

export async function createComment(contents, postID, parentID)
{
    console.log(contents, postID, parentID)
    const [result] = await pool.query("INSERT INTO comments (Username, Contents, PostID, ParentID) VALUES ('automatic', ?, ?, ?)", [contents, postID, parentID])
    const id = result.insertID
    console.log(result)
    return getCommentFromID(id)
}

async function populateReplies(comments)
{
    for(let i = 0; i < comments.length; i++)
    {
        const replies = await getRepliesUnderComment(comments[i].ID)

        if (replies.length)
        {
            comments[i].Replies = comments[i].Replies.concat(replies)

           await populateReplies(replies)
        }
    }
}