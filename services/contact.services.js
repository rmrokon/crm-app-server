const Contact = require("../models/Contact")

exports.getContactService = async () => {
    const contacts = await Contact.find({});
    return contacts;
};

exports.createContactService = async (data) => {
    const contact = await Contact.create(data);
    return contact;
};

exports.updateContactService = async (contact) => {
    const { _id } = contact;
    // const dealToUpdate = await Deal.findById(_id);
    const result = await Contact.updateOne({ _id }, { $set: contact });
}