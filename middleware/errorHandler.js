const {logEvents} = require("./logger")

const errorHandler = (error, req, res, next) =>{
    logEvents(`${error.name}: ${error.message}\t\t${req.url}\t\t${req.headers.origin}`, 'errorLog.log')
    console.log(error.stack)

    const status = res.statusCode ? res.statusCode : 500
    res.status(status)
    res.json({message: error.message})
    next()
}

module.exports = errorHandler