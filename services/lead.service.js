const Lead = require("../models/Lead")

exports.getLeadService = async () => {
    const leads = await Lead.find({});
    return leads;
};

exports.getLeadByIdService = async (_id) => {
    const lead = await Lead.findById(_id);
    return lead;
};

exports.createLeadService = async (data) => {
    const lead = await Lead.create(data);
    return lead;
};

exports.updateLeadService = async (lead) => {
    const { _id } = lead;
    // const dealToUpdate = await Deal.findById(_id);
    const result = await Lead.updateOne({ _id }, { $set: lead });
}