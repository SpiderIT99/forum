import { useNavigate } from "react-router-dom";
import {
  addAlert as addAlertReducer,
  removeAlert as removeAlertReducer,
  selectAlerts,
} from "../alertSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

const useAlerts = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const alerts = useAppSelector((state) => selectAlerts(state));

  const addAlert = (props) => {
    const timestamp = Date.now();
    dispatch(addAlertReducer({ ...props, timestamp }));
  };

  const removeAlert = (props) => {
    dispatch(removeAlertReducer(props));
  };

  const renderSuccessAlert = (props) => {
    if (!(props.serverResponse && "error" in props.serverResponse)) {
      addAlert({
        severity: "success",
        title: props.title,
        message: props.message,
      });
      if (props.redirectPath)
        navigate(props.redirectPath, { relative: "path" });
      return false;
    }
    return true;
  };

  return {
    alerts,
    removeAlert,
    renderSuccessAlert,
  };
};

export default useAlerts;
