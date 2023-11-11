export class JwksError extends Error {
    readonly name = "JwksError";
}

export class SigningKeyNotFoundError extends Error {
    readonly name = "SigningKeyNotFoundError";
}

export class JwtError extends Error {
    readonly name = "JwtError";
}

export class AccessDeniedError extends Error {
    readonly name = "AccessDeniedError";
}

export class InternalError extends Error {
    readonly name = "InternalError";
}

export class ValidationError extends Error {
    readonly name = "ValidationError";
}

export class CSVParseError extends Error {
    constructor(message) {
        super(message);
        this.name = "CSVParseError";
      }
}

export class StratLoadTransactionError extends Error {
    name = "Start load transaction error"
}

export class LoadDataEror extends Error {
    name = "Load data error"
}

export class EndLoadTransactionError extends Error {
    name = "End load transaction error"
}

export class CSVError extends Error {
    name = "CSV Error"
}

export class CSVWarningDuplicates extends Error {
    name = "CSV warning"
}
