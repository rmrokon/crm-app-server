const Contact = require("../models/Contact")

exports.getContactService = async () => {
    const contacts = await Contact.find({});
    return contacts;
};

exports.getContactByIdService = async (_id) => {
    const contact = await Contact.findById(_id);
    return contact;
};

exports.createContactService = async (data) => {
    const contact = await Contact.create(data);
    return contact;
};

exports.updateContactService = async (contact) => {
    const { _id } = contact;
    const result = await Contact.updateOne({ _id }, { $set: contact });
    return result;
}