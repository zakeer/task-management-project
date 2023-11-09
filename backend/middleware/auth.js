import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Authentication Middleware
export const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // `Basic ${userAuthDetails.token}`
    if (!token) return res.status(401).json({ error: 'Token required' });

    try {
        const { userId } = jwt.verify(token, 'your_secret_key');
        console.log({ userId });
        const user = await prisma.user.findUnique({ where: { id: +userId } });
        if (!user) return res.status(404).json({ error: 'User not found' });
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({ error: 'Invalid token' });
    }
};