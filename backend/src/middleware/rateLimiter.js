import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {

    // Each user has their own rate limit but it only works if authentication is done first
    // const userid = req.user.id;

    try {
        const  {success} = await ratelimit.limit("my-rate-limit"); 

        if(!success){
            return res.status(429).json({message: "Too many requests, please try again later."})
        }
        next();

    } catch (error) {
        console.log("Rate limit error", error);
        next(error);
        
    }
}

export default rateLimiter;