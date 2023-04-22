import { useCallback } from "react";

export const useChangeLanguage = () => {
  const changeLanguage = useCallback((locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}`;
    let cookies = document.cookie;
    console.log(cookies);
  }, []);

  return changeLanguage;
};
