const express = require('express');
const app = express();

app.set("view engine", "ejs" );

app.get("/", function name(req, res) {
    const items = [ // array de mensagens dentro de um objeto
        {
            title: "D", 
            Message: "esenvolver Aplicações/Serviços de Forma Fácil"
        },
        {
            title: "E",
            Message: "JS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            Message: "uito fácil de usar"
        },
        {
            title: "A",
            Message: "mo desenvolver"
        },
        {
            title: "I",
            Message: "niciando uma nova jornada"
        },
        {
            title: "S",
            Message: "empre evoluindo!!!"
        },

    ];

    const subtitle = "EJS é uma linguagem de modelagem para criação de páginas HTML utilizando JS"

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
});

app.get("/sobre", function name(req, res) {
    res.render("pages/about");
});

app.listen(8080);
console.log("Servidor Funcionando, chapa!");