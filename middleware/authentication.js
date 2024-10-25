const {validateToken} = require('../services/authentication')
function cheackForAuthCookie(){
    return (req,res,next)=>{
        const tokenCookieValue = req.cookies(cookieName);
        if(!tokenCookieValue){
            next();
        }
        try {
            const userPlayLoad = validateToken(tokenCookieValue);  
            req.user = userPlayLoad;  
        } catch (error) {
            next();
        }
        
    }
}

module.exports = {
    cheackForAuthCookie,
};