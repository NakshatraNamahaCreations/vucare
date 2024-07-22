const express = require("express");
const router = express.Router();
const voucherController = require("../../controller/userapp/voucher");





router.post("/addvoucher",voucherController.addvoucher);
router.get("/getvoucher", voucherController.getvoucher);
router.post("/deletevoucher/:id", voucherController.postdeletevoucher);
router.put("/editvoucher/:id", voucherController.editvoucher);


module.exports = router;