export const checkLogin = () => {
  if (!sessionStorage.getItem("accessToken")) {
    return true;
  } else {
    return false;
  }
};
