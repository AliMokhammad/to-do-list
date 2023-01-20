import { postData } from "./apiClient";
import { LoginUser } from '../actions/user.actions';

export const performLogin = async (body: LoginUser) =>
  await postData({ endpoint: "/users/login", body });

