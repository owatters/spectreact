const logger=require("./logger");
const pool=require("./db");

const commons={
    "logger":logger,
    "pool":pool
}
module.exports=commons;