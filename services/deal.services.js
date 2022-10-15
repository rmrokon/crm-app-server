const Deal = require("../models/Deal")

exports.getDealService = async () => {
    const deals = await Deal.find({});
    return deals;
};

exports.createDealService = async (data) => {
    const deal = await Deal.create(data);
    return deal;
};

exports.updateDealService = async (deal) => {
    const { _id } = deal;
    // const dealToUpdate = await Deal.findById(_id);
    const result = await Deal.updateOne({ _id }, { $set: deal });
}