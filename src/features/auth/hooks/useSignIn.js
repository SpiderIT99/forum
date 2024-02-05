import { useAppDispatch } from "../../../app/hooks";
import { setCredentials } from "../authSlice";

export const useSignIn = () => {
  // const [postMutation, { isLoading }] = useAuthorizeMutation();
  const dispatch = useAppDispatch();

  const signIn = (form) => {
    // TODO: add real authentication when the backend is ready
    // postMutation(formData).then((response) => {
    //   if ("data" in response) {
    dispatch(setCredentials({ ...form })); // temporary solution
    // dispatch(setCredentials({ ...response }));
    if (form.rememberMe) {
      localStorage.setItem("username", form.username);
    } else {
      localStorage.removeItem("username");
    }
    sessionStorage.setItem(
      "token",
      JSON.stringify({ username: form.username })
    );
    // sessionStorage.setItem("token", response.data.access_token);
    // }
    // });
  };

  return {
    signIn,
    // isSigningIn: isLoading,
  };
};
