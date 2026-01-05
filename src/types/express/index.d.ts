import { JwtPayload } from "jsonwebtoken";

// global scope 
declare global {
    namespace Express{
        interface Request{
            user?: JwtPayload;
        }
    }
}