import { signupSchema } from "../schema/schemas.js";
import { users } from "../models/usermodal.js";
import bcrypt from "bcrypt";
export const signup = async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const validationresult = signupSchema.safeParse({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    });
    try {
        if (!validationresult.success) {
            return res.status(400).json({
                success: false,
                error: validationresult.error.format()
            });
        }
        else {
            const hashedpassword = await bcrypt.hash(password, 5);
            const user = await users.create({
                firstName,
                lastName,
                email,
                hashedpassword,
            });
            if (user) {
                return res.status(200).json({
                    sucess: true,
                    message: "user signup successfully"
                });
            }
        }
    }
    catch (e) {
        console.log("this is error" + e);
        return res.status(500).json({
            message: "an internal server error occured ",
            success: false
        });
    }
};
//# sourceMappingURL=signup.js.map