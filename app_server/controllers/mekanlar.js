var express = require('express');
var router = express.Router();
const anaSayfa = function(req, res, next) {
    res.render('anasayfa', 
    {
    "baslik" : 'Anasayfa', 
    "sayfaBaslik" : {
    "siteAd" :"MekanBul" ,
    "slogan" : "Civardaki Mekanları Keşfet!"
    },
    "mekanlar" : [
        {
            "ad" : "Starbucks",
            "puan": "4",
            "adres" :"Centrum Garden AVM",
            "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
            "mesafe" : "10km"
        },
        {
            "ad" : "Gloria Jeans",
            "puan": "3",
            "adres" :"Sdü Doğu Kampüsü",
            "imkanlar":["Kahve","Çay","Pasta"],
            "mesafe" : "5km"
        }

    ]
});
};

const mekanBilgisi = function(req, res, next) {
    res.render('mekanbilgisi',
    { "baslik": 'Mekan bilgisi',
    "mekanBaslik":"Starbucks",
    "mekanDetay": {
        "ad":"Starbucks",
        "adres":"Centrum Garden AVM",
        "puan":"4",
        "imkanlar" : ["Dünya Kahveleleri","Kek","Pasta"],
        "koordinatlar":{
            "enlem":"37.7",
            "boylam": "30.5"
        },
        "saatler":[
            {
            "gunler":"Pazartesi-Cuma",
            "acilis":"09:00",
            "kapanis":"23:00",
            "kapali":false
        },
        {
            "gunler":"Cumartesi-Pazar",
            "acilis":"10:00",
            "kapanis":"22:00",
            "kapali":false
        }
        ],
        "yorumlar":[
            {
                "yorumYapan":"Sena ZORLU",
                "yorumMetni":"Kahveler ziyadesiyle harikulade.",
                "tarih":"22 Ekim 2022",
                "puan":"5"
            }
        ]

        
    
        
    }

});
};

const yorumEkle = function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum ekle' });
};



module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}
