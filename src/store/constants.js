const API = 'https://identitytoolkit.googleapis.com/v1/accounts:';
const KEY = 'key=AIzaSyDm4z0DkOngj0-PF71e8qrXRW8slfYpW4M';

export const SIGN_AUTH = `${API}lookup?${KEY}`;

export const SIGN_OUT = `${API}signUp?${KEY}`;

export const SIGN_IN = `${API}signInWithPassword?${KEY}`;
