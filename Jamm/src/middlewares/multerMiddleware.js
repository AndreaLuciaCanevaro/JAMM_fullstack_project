const multer = require('multer');
const path = require('path');

//middleware para carga de imagen de usuario
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
                        //acá antes decía ../../public/images/users, agregué una barra al final
        cb(null, path.join(__dirname, '../../public/images/users/'));
    },

    filename: function(req, file, cb) {
        const newFileName = 'user-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;