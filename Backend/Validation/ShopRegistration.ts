import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

class ShopValidation {
    public validateshop = [
        check("firstName", "First Name Should Contain atleast 2 letters").isLength({ min: 2 }),
        check("lastName", "Last Name should contain atleast 2 letters").isLength({ min: 2 }),
        check("emailId", "Enter Valid EmailId").isEmail(),
        check("phoneNumber", "Phone number should be 10 digits").isLength({ min: 10, max: 10 }),
        check("zipCode", "Zip Code should be 6 digits").isLength({ min: 6, max: 6 }),

        (req: Request, res: Response, next: NextFunction) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({
                    errors: errors.array().map((error) => {
                        return {
                            value: error.value,
                            msg: error.msg
                        };
                    })
                });
            }
            else next();
        }
    ];
}

export default ShopValidation;