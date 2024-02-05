import { Alert, AlertTitle } from "@mui/material";
import classNames from "classnames";
import useAlerts from "../../features/alerts/hooks/useAlerts";
import styles from "./alerts.module.css";

const Alerts = (props) => {
  const { alerts, removeAlert } = useAlerts();

  const wrapperClasses = classNames({
    [styles.fixedAlerts]: props.fixed,
    [styles.alertsWrapper]: !props.fixed,
  });

  return (
    <div className={wrapperClasses}>
      {alerts.map((alert) => {
        if (alert.severity === "success")
          setTimeout(() => removeAlert(alert.timestamp), 5000);
        return (
          <Alert
            key={alert.timestamp}
            onClose={() => removeAlert(alert.timestamp)}
            severity={alert.severity}
            variant={alert.variant}
          >
            {alert.title && <AlertTitle>{alert.title}</AlertTitle>}
            {alert.message}
          </Alert>
        );
      })}
    </div>
  );
};

export default Alerts;
