const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((e) => next(e));
  };
};

export default { asyncHandler };

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (e) {
//     res.status(e.code || 500).json({
//       success: false,
//       message: e.message,
//     });
//   }
// };
