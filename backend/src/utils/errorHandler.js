const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.message = err.message || "Internal Server Error";
  error.statusCode = err.statusCode || 500;
  return error;
};

export default errorHandler;
