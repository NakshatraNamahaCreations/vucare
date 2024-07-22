const express = require("express");
const router = express.Router();
const customercontroller = require("../controller/customer");

const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/customer");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/addcustomer",
  upload.single("customerprofile"),
  customercontroller.addcustomer
);
router.post("/usersign", customercontroller.usersignin);

router.get("/getcustomer", customercontroller.getallcustomer);
router.post("/editcustomer/:id", customercontroller.editcustomer);

router.post("/addservicedetails/:id", customercontroller.addservicedetails);
router.post(
  "/addcustomersviaexcelesheet",
  customercontroller.addCustomersViaExcelSheet
);
router.post("/deletetercustomer/:id", customercontroller.deletecustomer);
router.post(
  "/addDeliveryAddress/:cardNo",
  customercontroller.addDeliveryAddress
);

module.exports = router;
