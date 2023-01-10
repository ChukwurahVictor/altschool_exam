import { useContext } from 'react';
import { UserContext } from "../context/UserContext";

const useGetUser = () => {
  const { userInfo, isAuth } = useContext(UserContext);
  return {userInfo, isAuth};
};

export default useGetUser;