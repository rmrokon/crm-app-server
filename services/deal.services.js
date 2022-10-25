const Deal = require("../models/Deal")

exports.getDealService = async () => {
    const deals = await Deal.find({});
    return deals;
};

exports.getDealByIdService = async (_id) => {
    const deal = await Deal.findById(_id);
    return deal;
};

exports.createDealService = async (data) => {
    const deal = await Deal.create(data);
    return deal;
};

exports.updateDealService = async (deal) => {
    const { _id } = deal;
    const result = await Deal.updateOne({ _id }, { $set: deal });
    return result;
}