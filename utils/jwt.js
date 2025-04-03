import jwt from 'jsonwebtoken';
import { Router } from 'express';

export const validateJWT = Router();

validateJWT.use((req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ msg: "se requiere token"});
        return;
    }
    if (token.startsWith("Bearer")) {
        token = token.split(" ")[1];
    }
    jwt.verify(token, process.env.JWT, (e, decoded) => {
        if(e) {
            res.status(401).json({msg: "mal token" + e.message})
        } else {
            req.decoded = decoded;
            next();
        }
    })
});