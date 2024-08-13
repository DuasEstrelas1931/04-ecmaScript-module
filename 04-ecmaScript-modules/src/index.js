import * as database from "./utils/database.js";
import {getDataFromApi} from "./utils/api.js"

database.connectToDatabase("my-database");
database.disconnectDatabase("MongoDB");
getDataFromApi("https://api.example.com/data");

console.log("Node.js Richard love!");