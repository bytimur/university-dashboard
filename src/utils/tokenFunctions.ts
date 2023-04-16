import Cookies from "js-cookie";

import { LoginAsType } from "../redux/services/auth_service/auth-service";

type SaveTokenType = {
  login_as: LoginAsType;
  refresh: string;
  access: string;
};

const LOGIN_AS = "login_as";
const REFRESH = "refresh";
const ACCESS = "access";

export const saveToken = (data: SaveTokenType) => {
  Cookies.set(LOGIN_AS, data.login_as, { path: "/" });
  Cookies.set(REFRESH, data.refresh, { path: "/" });
  Cookies.set(ACCESS, data.access, { path: "/" });
  return {
    message: "success",
  };
};

export const getToken = () => {
  const login_as = Cookies.get(LOGIN_AS);
  const refresh = Cookies.get(REFRESH);
  const access = Cookies.get(ACCESS);
  return {
    login_as,
    access,
    refresh,
  };
};

export const removeToken = () => {
  Cookies.remove(LOGIN_AS, { maxAge: 0 });
  Cookies.remove(REFRESH, { maxAge: 0 });
  Cookies.remove(ACCESS, { maxAge: 0 });
};
