import { signinSchema } from "../schema/schemas.js";
export const signin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const validationresult = signinSchema.safeParse({
        email,
        password
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
            message: "signin successfully"
        });
    }
};
//# sourceMappingURL=signin.js.map