import { useAppDispatch } from "../../../app/hooks";
import { removeCredentials } from "../authSlice";

const useSignOut = () => {
  const dispatch = useAppDispatch();

  const signOut = () => {
    sessionStorage.removeItem("token");
    dispatch(removeCredentials());
  };

  return {
    signOut,
  };
};

export default useSignOut;
