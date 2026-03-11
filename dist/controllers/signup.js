import { signupSchema } from "../schema/schemas.js";
export const signup = (req, res) => {
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
    if (!validationresult.success) {
        return res.status(400).json({
            success: false,
            error: validationresult.error.format()
        });
    }
    else {
        return res.status(200).json({
            success: true,
            message: "signup successfully"
        });
    }
};
//# sourceMappingURL=signup.js.map