const { getLeadService, createLeadService, updateLeadService, getLeadByIdService } = require('../services/lead.service');


module.exports.getLeads = async (req, res, next) => {
    try {
        const leads = await getLeadService();
        res.status(200).json({
            status: 'success',
            data: leads
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Can't fetch data",
            error: error.message
        })
    }
}

module.exports.getLeadById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const lead = await getLeadByIdService(id);
        res.status(200).json({
            status: 'success',
            data: lead
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Can't fetch data",
            error: error.message
        })
    }
}

module.exports.addLead = async (req, res, next) => {
    try {
        const result = await createLeadService(req.body)

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

module.exports.updateLead = async (req, res, next) => {
    try {
        const result = await updateLeadService(req.body)
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
