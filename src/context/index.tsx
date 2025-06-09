import { createContext, useContext, useEffect, useState } from "react";
import { clearAuthUser, getAuthUser } from "../utils/auth.helper";

const AuthContext = createContext(null);

const AuthProvider = ({ children }: any) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoadingAuthData, setIsLoadingAuthData] = useState(true);

  const isLoggedIn = !!userInfo;

  const clearAuthData = async () => {
    try {
      await clearAuthUser();
      setUserInfo(null);
    } catch (error) {}
  };

  useEffect(() => {
    (async () => {
      try {
        const userData = await getAuthUser();
        if (userData) setUserInfo(userData);
      } catch (error) {
      } finally {
        setIsLoadingAuthData(false);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        isLoggedIn,
        isLoadingAuthData,
        setIsLoadingAuthData,
        setUserInfo,
        clearAuthData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw Error("AuthContext hooks can not be used outside AuthProvider");
  }

  return authContext;
};
