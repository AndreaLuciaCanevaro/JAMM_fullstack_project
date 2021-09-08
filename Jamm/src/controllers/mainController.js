const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
    index:(req,res) => {
        let gaming = products.filter (i => i.category == "Gaming");
        let accesorios = products.filter (i => i.category == "Accesorios");
        let dispositivos = products.filter (i => i.category == "Dispositivos");
        res.render("index", { productosGaming : gaming , productosAccesorios : accesorios , productosDispositivos : dispositivos});
    },
    login:(req,res) => {
        res.render("users/login")
    },
    register:(req,res) => {
        res.render("users/register")
    }
};

module.exports= controller;