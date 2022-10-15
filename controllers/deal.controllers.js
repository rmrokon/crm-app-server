const { getDealService, createDealService, updateDealService } = require('../services/deal.services');


module.exports.getDeals = async (req, res, next) => {
    try {
        const deals = await getDealService();
        res.status(200).json({
            status: 'success',
            data: deals
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "can't get data",
            error: error.message
        })
    }
}
module.exports.addDeal = async (req, res, next) => {
    try {
        const result = await createDealService(req.body)

        result.logger();
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

module.exports.updateDeal = async (req, res, next) => {
    try {
        const result = await updateDealService(req.body)
        res.status(200).json({
            status: 'success',
            message: 'Updated successfully',
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
