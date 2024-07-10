import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
    try {
        // hashing users password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10 );
    
        // create a new user
         await UserModel.create({
            ...register.body,
            password: hashedPassword
        });
        // Return response
        res.Status(201).json('User registered sucessfully');
    } catch (error) {
       next(error) 
    }
}

export const login = async () => { }

export const logout = async () => { }

export const profile = async () => { }