var mongoose = require("mongoose");

//var dbURI = "mongodb://localhost/mekanbul";
var dbURI ="mongodb+srv://sena:1234@mekanbul.u6hs2tu.mongodb.net/mekanbul?retryWrites=true&w=majority"
require("./mekansema"); //db.js dosyası mekansema içindeki her şeyi kullanabilmesi için tanıttık
mongoose.connect(dbURI);

function kapat( msg , callback ){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });
}

process.on("SIGINT" , function(){
    kapat("uygulama kapatıldı" , function(){
        process.exit(0);
    });
});

mongoose.connection.on('connected', function(){
    console.log(dbURI + " adresindeki veritabanına bağlanıldı\n");
});

mongoose.connection.on('disconnected', function() {
    console.log(dbURI + " adresindeki veritabanına bağlantısı koptu\n");
});

mongoose.connection.on('error', function() {
    console.log("bağlantı hatası\n");
});
