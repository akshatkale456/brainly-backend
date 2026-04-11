import multer from "multer";

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // You can change 'uploads/' to wherever you want to store your files
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Ensuring unique filenames
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

// Configure the upload middleware
export const upload = multer({ 
  storage: storage,
  limits: {
    // Limit file size to 5MB (optional but recommended)
    fileSize: 5 * 1024 * 1024 
  }
});
