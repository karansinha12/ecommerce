const jwt = require('jsonwebtoken')


exports.requiresignin = (req, res, next) => {
    if(req.headers.authorization !== null){
    const token = req.headers.authorization.split(' ')[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    // next();
    }
    else{
        return res.status(400).json({message: 'Authorization required'})
    }
    next();
    
}


exports.userMiddleware = (req, res, next) => {
    console.log(req.user.role)
    if(req.user.role != 'user') {
        return res.status(403).json({message: 'User access denied'})
    }
    next();
}

exports.adminMiddleware = (req, res, next) => {
    console.log(req.user.role)
    if(req.user.role != 'admin') {
        return res.status(403).json({message: 'access denied'})
    }
    next();
}