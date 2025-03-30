"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    // host:'',
    // port:3000,
    // database:'',
    // user:'',
    // password:''
    // OR
    connectionString: "postgresql://neondb_owner:XKQMkpe0w6zY@ep-white-darkness-a8yjw0n8-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`);
        console.log(result);
    });
}
// createUsersTable()
function insertIntoUsers(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        // $ is used to prevent SQL injection
        const insertQuery = "INSERT INTO users (username,email,password) VALUES ($1,$2,$3)";
        const values = [username, email, password];
        const res = yield client.query(insertQuery, values);
        console.log(res);
    });
}
insertIntoUsers("sudhanshu", "sudhanshu2723@gmail.com", "123456");
