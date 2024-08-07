 //what used in function must be defined here 
 const fs=require("fs")
 const path=require("path")
const file_path = path.join(__dirname,"..","data.json");

function read_and_parsed_data()
{
    const json_file = fs.readFileSync(file_path);
    const exsisting_users = JSON.parse(json_file);
    return exsisting_users;
}

function write_data(exsisting_users)
{
    fs.writeFileSync(file_path, JSON.stringify(exsisting_users));
}
module.exports={
    read_and_parsed_data:read_and_parsed_data,
    write_data:write_data
}
