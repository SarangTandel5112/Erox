import { Request, Response } from "express";
import ShopUser from "../Models/ShopUserModels/ShopUser";
import ShopAddress from "../Models/ShopUserModels/ShopAddress";
import BankAccount from "../Models/ShopUserModels/BankAccount";
import Shop from "../Models/ShopUserModels/Shop";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import Logger from "../Logger/Logger";
import bcrypt from "bcryptjs";


const logger = new Logger().logger;


class ShopController {

    public shopRegister = async (req: Request, res: Response) => {

        const { firstName, lastName, emailId, userName, password, phoneNumber } = req.body;

        const bcryptpassword = await bcrypt.hash(password, 10);

        const newUser = new ShopUser({
            firstName,
            lastName,
            emailId,
            userName,
            password: bcryptpassword,
            phoneNumber
        })

        const { accountNumber, IFSCcode, bankName, branchName } = req.body;

        const newAcc = new BankAccount({
            shopUserId: newUser._id,
            accountNumber,
            IFSCcode,
            bankName,
            branchName
        })
        newAcc.save();

        const { addressLine1, addressLine2, landMark, district, state, country, zipCode } = req.body;

        const shopadd = new ShopAddress({
            shopUserId: newUser._id,
            addressLine1,
            addressLine2,
            landMark,
            district,
            state,
            country,
            zipCode
        })

        const { shopName, GSTno } = req.body;

        const shop = new Shop({
            shopName,
            GSTno,
            shopUserId: newUser._id,
            shopAddress: shopadd._id
        })
        shop.save();

        shopadd.shopId = shop._id;
        shopadd.save();
        newUser.bankAccountId = newAcc._id;
        newUser.shopAddress = shopadd._id;
        newUser.shopId = shop._id;
        newUser.save();

        const tokenData = {
            id: newUser._id,
            email: newUser.emailId
        }

        try {
            const token = await jwt.sign(tokenData, process.env.SECRET_KEY as string, { expiresIn: "10m" })
            const mailTransporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_PASS
                }
            });
            const mailDetails: any = {
                from: process.env.EMAIL,
                to: emailId,
                subject: "Verification of your account",
                html: `<h1 style="text-align: center;">Verify Your Account</h1> http://localhost:4000/verify/${token}           
            <h3 style="text-align: center;">Thank You</h3>`
            };
            mailTransporter.sendMail(mailDetails, function (err, data) {
                if (err) {
                    return logger.error(err);
                } else {
                    // console.log("Email sent successfully", data);
                }
            });
            res.status(200).json({
                success: true,
                data: "Please Verify Your Email To Login",
            });
        } catch (error: any) {
            logger.error(error);
            return res.status(501).json({
                succss: false,
                data: "Internal Server Error,Try After Some Time",
            });
        }
    }

    public verifyemail = async (req: Request, res: Response) => {

        const { token } = req.params;
        if (!token) {
            return res.status(400).json({ status: false, data: "Token not Found" })
        }
        try {
            interface jwtverify {
                id: string,
                email: string
            }
            const data: jwtverify = await jwt.verify(token, process.env.SECRET_KEY as string) as jwtverify;
            const user = await ShopUser.findById(data.id)
            if (!user) {
                return res.status(400).json({ status: false, data: "User Not Registered,Please Register" });
            }
            if (user.email_verified === true) {
                return res.status(400).json({
                    status: false,
                    data: "Email is Already Verified , Please Continue To Login",
                });
            }
            user.email_verified = true;
            user.save();
            res.status(200).json({ status: true, data: "Email Verified , Continue to login" });
        } catch (error) {
            return res.status(400).json({ status: false, data: "Link Expired ! Please Re-Register" });
        }
    }

}

export default ShopController;