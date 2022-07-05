import * as config from '../config.js'
import jwt from 'jsonwebtoken';


const jwtKey = "my_secret_key"; // from env vars...
const jwtExpirySeconds = 300;


const dbUsername = 'samrun';
const dbPassword = '123';


export const loginController = async (req, res) => {
    console.log(req.body);
    try{
        const { username, password } = req.body // should handle if there is no username pass in body...

        if (!username || !password || username !== dbUsername || password !== dbPassword) {
            // return 401 error is username or password doesn't exist, or if password does
            // not match the password in our records
            return res.status(401).end()
        }
    
        // Create a new token with the username in the payload
        // and which expires 300 seconds after issue
        const token = jwt.sign({ username }, jwtKey, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        })
        console.log("token:", token)
    
        // set the cookie as the token string, with a similar max age as the token
        // here, the max age is in milliseconds, so we multiply by 1000
        res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 })
        res.end()

    }catch(err){
        console.log(err);
        return res.status(500).end()
    }

    
}


export const refreshController = async (req, res) => {
    // (BEGIN) The code uptil this point is the same as the first part of the `welcome` route
	const token = req.cookies.token

	if (!token) {
		return res.status(401).end()
	}

	var payload
	try {
		payload = jwt.verify(token, jwtKey)
	} catch (e) {
		if (e instanceof jwt.JsonWebTokenError) {
			return res.status(401).end()
		}
		return res.status(400).end()
	}
	// (END) The code uptil this point is the same as the first part of the `welcome` route

	// We ensure that a new token is not issued until enough time has elapsed
	// In this case, a new token will only be issued if the old token is within
	// 10 seconds of expiry. Otherwise, return a bad request status
	const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
	if (payload.exp - nowUnixSeconds > 10) {
		return res.status(400).end()
	}

	// Now, create a new token for the current user, with a renewed expiration time
	const newToken = jwt.sign({ username: payload.username }, jwtKey, {
		algorithm: "HS256",
		expiresIn: jwtExpirySeconds,
	})

	// Set the new token as the users `token` cookie
	res.cookie("token", newToken, { maxAge: jwtExpirySeconds * 1000 })
	res.end()
}


// export const checkAuthController = async (req, res) => {
    
// }


export const logoutController = async (req, res) => {

    // On client, also delete the accessToken

    // const cookies = req.cookies;
    // if (!cookies?.jwt) return res.sendStatus(204); //No content
    // const refreshToken = cookies.jwt;

    // // Is refreshToken in db?
    // const foundUser = await User.findOne({ refreshToken }).exec();
    // if (!foundUser) {
    //     res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    //     return res.sendStatus(204);
    // }

    // Delete refreshToken in db
    // foundUser.refreshToken = '';
    // const result = await foundUser.save();
    // console.log(result);

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.sendStatus(204);
    
}

