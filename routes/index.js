const router = require("express").Router();

const qrRouter = require("../modules/qrcode/qrcode.route");
const pdfRouter = require("../modules/pdf/pdf.route");
const ccRouter = require("../modules/currency/currency.route");


router.use("/api/v1/qr",qrRouter);
router.use("/api/v1/pdf",pdfRouter);
router.use("/api/v1/cc",ccRouter);


module.exports = router;