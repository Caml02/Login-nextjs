import User from '@/models/user';
import { NextResponse } from 'next/server';
import { connectDB } from '@/libs/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {

    try {
        await connectDB()
        const {fullname, email, password} = await request.json()
        console.log(fullname, email, password);
        if (!password || password.length < 8)
        return NextResponse.json(
            {error: "Password must be at least 8 characters long"},
            {status: 400,});

        const userFound = await User.findOne({email})
    if (userFound) return NextResponse.json(
        {error: "Email already exists"},    
        {status: 409,})

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({
        fullname,
        email,  
        password: hashedPassword
    })

    const savedUser = await user.save()
    return NextResponse.json({
        _id: savedUser._id,
        email: savedUser.email,
        fullname: savedUser.fullname,
        createdAt: savedUser.createdAt,
        updatedAt: savedUser.updatedAt,
    },
        { status: 201 }
    );

    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message,
                },
                {status: 500,});
        }
    }
}