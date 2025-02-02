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

export async function printData()
{
    try {
        // Query to select all data from the 'users' table
        const [rows] = await pool.query('SELECT * FROM users');

        // Loop through the results and print them
        return rows;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
//Would you like this function to also return information about the job listings?


//add username function, takes string
//SQL query: INSERT INTO users (username)
export async function addUsername(username)
{
    const [result] = await pool.query("INSERT INTO users (usernames) VALUES (?)", [username]);
    return result;
}


//get all job listings from a certain username 
//SQL query: SELECT * FROM job_listings WHERE username = ?, [username]
export async function getJobListings(category, username)
{
    const [result] = await pool.query("SELECT * FROM job_listing WHERE category = ? AND username = ?", [category, username]);
    return result;
}

export async function addJobListing(companyName, jobTitle)
{
    console.log(companyName + " " + jobTitle);
    const [result] = await pool.query("INSERT INTO job_listing VALUES (?, ?, ?, ?)", [companyName, jobTitle, "pending", "test_username"]);
    return result;
}

//Add a password to a user
export async function addPassword(username, password)
{
    const [result] = await pool.query("UPDATE users SET passwords = ? WHERE usernames = ?", [password, username]);
    return result;
}
//Perhaps this method above makes the get user info obsolete?
//Think about adding a forgot password feature perhaps?