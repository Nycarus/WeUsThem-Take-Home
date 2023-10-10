const express = require("express")
const contactServices = require("../services/contactServices")
const router = express.Router();

router.get('/', contactServices.getContact)
router.post('/', contactServices.createContact)
router.delete('/', contactServices.deleteContact)
router.patch('/', contactServices.updateContact)

module.exports = router