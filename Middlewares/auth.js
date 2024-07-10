// check if user is authenticated
export const checkUsersession = (req, res, next) => {
   try {
    if (req.session.user) {
        next();
    } else{
        return res.status(401).json('No user session');
    }
   } catch (error) {
    next(error)
   } 
}