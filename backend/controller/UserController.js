// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const login = async (req, res) => {
    const { username, password } = req.body;
    console.log({username, password}, req.body)
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: 'user.id' }, 'your_secret_key');
    res.json({ token });
}

export const register = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await prisma.user.create({
            data: { username, password: hashedPassword },
        });
        res.status(201).json({ userId: user.id });
    } catch (error) {
        res.status(400).json({ error: 'Username already exists' });
    }
}