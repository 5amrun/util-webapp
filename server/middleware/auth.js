import jwt from 'jsonwebtoken';



export const verifyJWT = (req, res, next) => {
    // We can obtain the session token from the requests cookies, which come with every request
    const token = req.cookies.token

    // if the cookie is not set, return an unauthorized error
    if (!token) {
        return res.status(401).end()
    }

    var payload
    try {
        // Parse the JWT string and store the result in `payload`.
        // Note that we are passing the key in this method as well. This method will throw an error
        // if the token is invalid (if it has expired according to the expiry time we set on sign in),
        // or if the signature does not match
        payload = jwt.verify(token, jwtKey)
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            // if the error thrown is because the JWT is unauthorized, return a 401 error
            return res.status(403).end()
        }
        // otherwise, return a bad request error
        return res.status(400).end()
    }

    // or:::
    // jwt.verify(
    //     token,
    //     process.env.ACCESS_TOKEN_SECRET,
    //     (err, decoded) => {
    //         if (err) return res.sendStatus(403); //invalid token
    //         req.user = decoded.UserInfo.username;
    //         req.roles = decoded.UserInfo.roles;
    //         next();
    //     }
    // );


    // Finally, call next() if everything is fine...
    next();

}


