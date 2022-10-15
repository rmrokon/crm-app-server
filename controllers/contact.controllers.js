const { getContactService, createContactService, updateContactService } = require('../services/contact.services');


module.exports.getAccounts = async (req, res, next) => {
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
module.exports.addAccount = async (req, res, next) => {
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

module.exports.updateAccount = async (req, res, next) => {
    try {
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
