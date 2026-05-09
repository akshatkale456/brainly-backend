import multer from "multer";
import fs from "fs";

// Ensure the uploads directory exists
const uploadDir = "uploads/";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
 destination: function (req, file, cb) {
    cb(null, uploadDir);
 },
 filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
export const upload = multer({ storage: storage });