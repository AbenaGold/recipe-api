import bcrypt from "bcrypt";
import { userModel } from "../models/user.js";

export const register = async (req, res, next) => {
    try {
        // hashing users password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);

        // create a new user
        await userModel.create({
            ...req.body,
            password: hashedPassword
        });

        // generate a session when registering
        req.session.user = {id: user.id}
        // Return response
        res.status(201).json('User registered sucessfully');
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {

    const { email, password } = req.body;
    // find a user using their unique identifier
    const user = await userModel.findOne({
        // login with email/phone/username
        $or:[ 
            { email:email},
            { username:username},
            { phone: phone}

        ]
        // email: req.body.email
    });
    if (!user) {
        res.status(401).json('no user found');
    } else {
        // verify their password
        const correctPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!correctPassword) {
            res.status(401).json('Invalid credentials');
        }else{
            // generate a session 
            req.session.user = {id: user.id}
        // return response
        res.status(200).json('login successful');
        }


        
    }



}

export const logout = async (req, res, next) => {
    try {
        // Destroy user session
        await req.session.destroy();
        // Return response
        res.status(200).json('logout successful');
    } catch (error) {
       next(error) 
    }
 }



export const profile = async (req, res, next) => {
   try {
     // find a user by id
     const user = await userModel
     .findById(req.session.user.id)
     .select({password: false});
 // return response
     res.status(200).json(user);
   } catch (error) {
    next(error);
   }
 }