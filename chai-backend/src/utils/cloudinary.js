import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const uploadOnCloudinary = async (localFilePath) => {
//   console.log(`Uploading file at path: ${localFilePath}`);
//   try {
//     if (!localFilePath) return null;
//     //   upload the file on cloudinary

//     const response = await cloudinary.uploader.upload(localFilePath, {
//       resource_type: "ato",
//     });
//     // file has been upload successful
//     console.log("file is uploaded on cloudinary", response.url);
//     return response;
//   } catch (e) {
//     fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
//     console.log(fs.unlinkSync(localFilePath));
//     return null;
//   }
// };

// export { uploadOnCloudinary };
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded successfull
    //console.log("file is uploaded on cloudinary ", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    console.log("temp file deleted");
    return null;
  }
};

export { uploadOnCloudinary };
