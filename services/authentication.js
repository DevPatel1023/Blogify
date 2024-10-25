const JWT = require('jsonwebtoken');

const secret = "$Ak3#xO.<U&*b+-K@M%x:}"


function createTokenForUser(user){
    const playLoad = {
        _id : user._id,
        email : user.email,
        profileImageUrl : user.profileImageUrl,
        role : user.role
    }
    const token = JWT.sign(playLoad,secret);
    return token;
}

function validateToken(token){
    const playLoad = JWT.verify(token,secret);
    return playLoad;
}

module.exports = {
    createTokenForUser,
    validateToken
}