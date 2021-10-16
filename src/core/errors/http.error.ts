import { Response } from '../types';

export abstract class HttpError extends Error {
  httpCode: number;

  constructor(httpCode: number, message?: string) {
    super(message);
    Object.setPrototypeOf(this, HttpError.prototype);
    this.httpCode = httpCode;
    this.stack = new Error().stack;
  }

  abstract toJson(): Response<unknown>;
}
