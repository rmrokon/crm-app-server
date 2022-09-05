const fs = require('fs');
let users = require('../data.json');


module.exports.getAllUsers = (req, res, next) => {
    res.send(users);
}
module.exports.getArandomUser = (req, res, next) => {
    const randomId = Math.floor(Math.random() * users.length);
    const randomUser = users.find(user => user.id === randomId);
    res.send(randomUser);
}
module.exports.saveAuser = (req, res, next) => {
    const user = req.body;
    if (user.hasOwnProperty('id') &&
        user.hasOwnProperty('name') &&
        user.hasOwnProperty('contact') &&
        user.hasOwnProperty('photoUrl') &&
        user.hasOwnProperty('address') &&
        user.hasOwnProperty('gender')) {
        const newUsers = [...users, user];
        fs.writeFileSync('data.json', JSON.stringify(newUsers));
        res.status(200).send("User Added Successfully");
    } else {
        res.status(400).send("Invalid request")
    }
}
module.exports.updateAuser = (req, res, next) => {
    const { id } = req.params;
    const userToUpdate = users.find(user => user.id === Number(id));
    console.log(userToUpdate);
    userToUpdate.id = Number(id);
    userToUpdate.name = req.body?.name || userToUpdate.name;
    userToUpdate.photoUrl = req.body?.photoUrl || userToUpdate.photoUrl;
    userToUpdate.contact = req.body?.contact || userToUpdate.contact;
    userToUpdate.address = req.body?.address || userToUpdate.address;
    userToUpdate.gender = req.body?.gender || userToUpdate.gender;
    console.log(userToUpdate)
    fs.writeFileSync('data.json', JSON.stringify(users));
    res.send("user added");
}
module.exports.bulkUserUpdate = (req, res, next) => {
    // Comming soon
}
module.exports.deleteAuser = (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== Number(id));
    fs.writeFileSync('data.json', JSON.stringify(users));
    res.status(200).send('User deleted');
}