const fs = require('fs');

const path = require('path');
const productsFilePath = path.join(__dirname, '../data/usersDataBase.json');

const User = {
	fileName: productsFilePath,

	getData: function () {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},
//genera un ID porque cuando traigo a las usuarios con la consulta, no me trae la info del ID
//obtengo el último ID si tengo usuarios, sino devuelve 1
	generateId: function () {
		let allUsers = this.findAll();
		let lastUser = allUsers.pop();
		if (lastUser) {
			return lastUser.id + 1;
		}
		return 1;
	},

	findAll: function () {
		return this.getData();
	},
  //Buscar un usuario por su ID
	findByPk: function (id) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser.id === id);
		return userFound;
	},
	//Buscar un usuario por un campo
	findByField: function (field, text) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser[field] === text);
		return userFound;
	},
	//Crear usuario
	create: function (userData) {
		let allUsers = this.findAll();
		let newUser = {
			id: this.generateId(),
			...userData //spread operator
		}
//		console.log("newUser",newUser)
		allUsers.push(newUser);
		fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null,  ' '));
		return newUser;
	},
	//Borrar usuario
	delete: function (id) {
		let allUsers = this.findAll();
		let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
		fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
		return true;
	}
}

module.exports = User;