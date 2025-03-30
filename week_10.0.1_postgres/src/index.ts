import { Client } from "pg";

const client =new Client({
    // host:'',
    // port:3000,
    // database:'',
    // user:'',
    // password:''
    // OR
    connectionString:"postgresql://neondb_owner:XKQMkpe0w6zY@ep-white-darkness-a8yjw0n8-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"

})



async function createUsersTable(){
    await client.connect()
    const result=await client.query(
        `CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`
    )
    console.log(result)
}

// createUsersTable()

async function insertIntoUsers(username:string,email:string,password:string){
    await client.connect()
    // $ is used to prevent SQL injection
    const insertQuery="INSERT INTO users (username,email,password) VALUES ($1,$2,$3)";
    const values=[username,email,password]
    const res=await client.query(insertQuery,values);
    console.log(res)

}

insertIntoUsers("sudhanshu","sudhanshu2723@gmail.com","123456")