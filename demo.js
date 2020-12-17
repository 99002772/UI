const fs = require('fs');
const Pool = require("pg").Pool;
var cors = require('cors')
// Create a connection to the database
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "Bike",
  password: "postgres123",
  port: 5432
});

var jsonData= [] ;
// open the PostgreSQL connection
pool.connect((err, client, done) => {
   
  if (err) throw err;
  client.query("SELECT * FROM bike", (err, res) => {
    done();
    
    if (err) {
      console.log(err.stack);
    } else {
      jsonData = JSON.parse(JSON.stringify(res.rows));
      
      //console.log("jsonData", jsonData);
      //console.log("jsonData", jsonData[1]);
      // TODO: export to CSV file
    }
    console.log("jsonData", jsonData);
  
  
const jsonContent = JSON.stringify(jsonData);

fs.writeFile("./jsonData.json", jsonContent, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
});
});