const { getContactService, createContactService, updateContactService, getContactByIdService } = require('../services/contact.services');


module.exports.getContacts = async (req, res, next) => {
    try {
        const contacts = await getContactService();
        res.status(200).json({
            status: 'success',
            data: contacts
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Can't fetch data",
            error: error.message
        })
    }
}

module.exports.getContactById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const contact = await getContactByIdService(id);
        res.status(200).json({
            status: 'success',
            data: contact
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Can't fetch data",
            error: error.message
        })
    }
}


module.exports.addContact = async (req, res, next) => {
    try {
        const result = await createContactService(req.body)

        res.status(200).json({
            status: 'success',
            message: 'Data inserted successfully!',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Data not inserted',
            error: error.message
        })
    }
}

module.exports.updateContact = async (req, res, next) => {
    try {
        console.log(req.body);
        const result = await updateContactService(req.body)
        res.status(200).json({
            status: 'success',
            message: 'Updated successfully!',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Failed to update!',
            error: error.message
        })
    }
}
