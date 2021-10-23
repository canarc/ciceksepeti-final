export const CheckEmail = (email: string) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

export const CheckPassword = (password: string) => {
  if (password.length >= 8 && password.length <= 20) {
    return true;
  }
  return false;
};
