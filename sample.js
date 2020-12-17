const {Pool,Client} = require('pg')
const connectionString = 'postgressql://postgres:postgres123@localhost:5432/Bike'

const client = new Client({
    connectionString:connectionString
})

client.connect()
.then(() => console.log("Connected successfuly"))
.then(() => client.query("select * from bike"))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())



/*client.connect()
app.get('/messages',function(request,response){
    var vin = request.query['vin'];
    var engine_status = request.query['engine_status'];
    console.log("utilisateur "+ vin +" avec "+ engine_status +" comme mot de passe");
    const pool  = new Pool(config);
    sql = `select * from bikes where pseudo = '${ vin }';`;
    pool.on('error',function(err,client){
      console.log("erreur de connexion",err);
    });
    pool.query(sql,function(err,res){
       if (err){return console.error('erreur dexécution !!',err,sql);}
       console.log('nom:', res.rows[0].nom, ' prenom:', res.rows[0].prenom,' pseudo:', res.rows[0].pseudo);
    });
 });


/*client.query('SELECT * from bike',(err,res)=>{

    console.log(err,res)
    client.end()
})

/*
app.get('/table',function(req,res){
    var dbClient = new db.Client(dbConnection);

    dbClient.connect(function(err){
        if(err)
            throw err;

        var query = "insert into Contacts (fullname,phone,mobile,address) values ($1,$2,$3,$4)";
        var fullname = req.query.fullname;
        var phone = req.query.phone1;
        var mobile = req.query.phone2;
        var address = req.query.address;

        var contact = [fullname , phone , mobile , address];

        dbClient.query(query , contact , function(err){
            if(err)
                throw err;
            else {
                console.log('Success!') ;
                res.redirect('/');      
                res.end();
            }               
        });
    });
});

app.get('????',function(req,res) {
    var dbClient = new db.Client(dbConnection);

    dbClient.connect(function(err){
        if(err)
            throw err;

        var query = "select * from Contacts";

        dbClient.query(query,function(err,result){
            if(err)
                throw err;
            else {

                   ??????????

                res.end();
            }
        });
    });
});

app.listen(8080,function(){
    console.log('Server started');
});
*/
