import JWT from 'jsonwebtoken';
import { JwtError, ValidationError } from "./types/customErrors";
// import { AccessToken, IdToken, TokenValidatorOptions } from "./types/types";

export class TokenValidator {
    private readonly secret: string;

    public constructor(secret: string) {
        this.secret = secret;
    }

    // Дописати тип повернення
    public verify(token: string): Record<string, string> {
        try {
            const decodedToken = JWT.verify(token, this.secret);

            return decodedToken;
        } catch (err) {
            // Допсиати
            throw new ValidationError("Дописати")
        }
    }
}
