import Lead from "../models/lead.model.js";
import AppError from "../utils/appError.js";

const generate = async (req, res, next) => {
    const { fullName, email, phone} = req.body

    if(!fullName || !email || !phone){
        return next(new AppError('Please fill in all fields', 400))
    }

    const leadExist = await Lead.findOne({ email })
    if(leadExist){
        return next(new AppError('Email already registered', 400))
    }

    const lead = await Lead.create({
        fullName,
        email,
        phone
    })

    if(!lead){
        return next(new AppError('User not registered, Server issue', 400))
    }
    
    await lead.save()

    return res.status(201).json({
        success: true,
        message: 'Successfully Submitted',
        lead
    })
}

export { generate }