const Account = require("../models/Account")

exports.getAccountService = async () => {
    const accounts = await Account.find({});
    return accounts;
};
exports.getAccountByIdService = async (_id) => {
    const account = await Account.findById(_id);
    return account;
};

exports.createAccountService = async (data) => {
    const account = await Account.create(data);
    return account;
};

exports.updateAccountService = async (account) => {
    const { _id } = account;
    const result = await Account.updateOne({ _id }, { $set: account });
}