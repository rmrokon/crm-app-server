const { query } = require('express');
const { getAccountService, createAccountService, updateAccountService, getAccountByIdService } = require('../services/account.services');


module.exports.getAccounts = async (req, res, next) => {
    try {
        const accounts = await getAccountService();
        res.status(200).json({
            status: 'success',
            data: accounts
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Can't fetch data",
            error: error.message
        })
    }
}
module.exports.getAccountById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const account = await getAccountByIdService(id);
        res.status(200).json({
            status: 'success',
            data: account
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
        const result = await createAccountService(req.body)

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
        const result = await updateAccountService(req.body)
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
