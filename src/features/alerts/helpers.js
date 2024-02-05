export const formatAlert = (error) => {
  const timestamp = Date.now();

  return {
    message: error.message,
    severity: "error",
    timestamp,
    title: error.title,
  };
};
