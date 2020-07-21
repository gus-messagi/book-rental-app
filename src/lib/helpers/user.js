import { TYPE_USER_CLIENT, TYPE_USER_ADMIN } from '../constants/user';

export const checkUserClient = (auth) => auth === TYPE_USER_CLIENT;
export const checkUserAdmin = (auth) => auth === TYPE_USER_ADMIN;
