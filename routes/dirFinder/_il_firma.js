var Firma = require('./Firma')

/* GET users listing. */
function SilSfirma (req, res, next) {
    Firma(req.params.ilce_kategori_firma, req, res, next)
};

module.exports = SilSfirma;
