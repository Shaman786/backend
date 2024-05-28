// import asyncHandler from "../utils/asyncHandler";
import { asyncHandler } from "../utils/asyncHandler.js";
console.log(asyncHandler);
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

export { registerUser };
