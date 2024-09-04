const multer = require('multer');
const path = require('path');

const DIR = 'uploads/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        cb(null, file.originalname)
    }
});

var upload = multer({

    storage: storage,
    fileFilter: (req, file, cb) => {
        if(file.mimetype == "image/jpg" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png .jpg and .jpeg format are allowed!'));
        }
    }
});

module.exports = { uploads };