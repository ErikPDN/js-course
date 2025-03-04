import multer from "multer";
import { resolve, extname } from "path";

const ramdom = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => { cb(null, resolve(__dirname, '..', '..', 'uploads', 'images')) },
    filename: (req, file, cb) => { cb(null, `${Date.now()}_${ramdom()}${extname(file.originalname)}`) },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
    ];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};
