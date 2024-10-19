

const errorHanler = (err,request,response,next) =>{
    const statusCode = response.statusCode ? response.statusCode : 500
    response.status(statusCode)
    response.json({
        message:err.message,
        stack:err.stack
    })
}
module.exports = errorHanler