

module.exports.videoHandler =async (req, res, next)=>{
    try {
        let videos = await req.Model.find({
            row_stat_cd:"A"
        }).sort({row_ts:1});
        response.success(res, videos);
    } catch (error) {
        response.error(res, 500, error);
    }
}

module.exports.sliderData = async (req, res, next)=>{
    try {
        let videos = await req.Model.find({
            row_stat_cd:"A"
        }).sort({row_ts:-1}).limit(6);
        response.success(res, videos);
    } catch (error) {
        response.error(res, 500, error);
    }
}