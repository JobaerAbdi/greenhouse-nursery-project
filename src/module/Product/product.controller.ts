import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/asyncHandler";
import { ProductServices } from "./product.service";

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProduct(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product created successfully",
    data: result,
  });
});
export const ProductController = {
  createProduct,
};
