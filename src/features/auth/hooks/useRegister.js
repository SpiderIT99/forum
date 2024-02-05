import useAlerts from "../../alerts/hooks/useAlerts";
import { usePostUserMutation } from "../authApiSlice";

const useRegister = () => {
  const [postMutation, { isLoading }] = usePostUserMutation();
  const { renderSuccessAlert } = useAlerts();

  const postUser = (user) => {
      console.log(user)
    //   TODO: use when the BE is ready
    // postMutation(user).then((response) =>
    //   renderSuccessAlert({
    //     title: "User added successfully",
    //     message: `User "${user.username}" uploaded.`,
    //     serverResponse: response,
    //   })
    // );
  };

  return {
    postUser,
    isPostingUser: isLoading,
  };
};

export default useRegister;
