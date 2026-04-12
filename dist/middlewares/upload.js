import multer from "multer";
const destination = (req, file, cb) => {
    cb(null, "uploads/");
};
const Filename = (req, file, cb) => {
    cb(null, Date.now + "-" + file.originalname);
};
const storage = multer.diskStorage({
    destination: destination,
    filename: Filename
});
export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024,
    }
});
//# sourceMappingURL=upload.js.map