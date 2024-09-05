// all the error types described here
// can add more depending upon requirements

import {Failure} from './failure';

export enum SignInError {
  SignInError,
}
export enum SignUpError {
  SignUpError,
}
// example for throwing and typesafing custom errors
export const uploadMediaGetError = (): Failure<SignInError.SignInError> => ({
  type: SignInError.SignInError,
  reason: 'error signin in',
});
