const router = require("express").Router();

const qrRouter = require("../modules/qrcode/qrcode.route");
//const pdfRouter = require("../modules/pdf/pdf.route");

router.use("/api/v1/qr", qrRouter);
//router.use("/api/v1/pdf", pdfRouter);

module.exports = router;

