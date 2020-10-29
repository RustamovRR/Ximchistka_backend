const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

router.post('/', async (req, res) => {
	try {
		const admin = await Admin.findById('5f98f6612e07524d23e9323e')

		if (admin) {
			if (admin.password === req.body.password) {
				return res.json({
					success: true,
					message: "Tasdiqlandi!"
				})
			}
		}

		res.status(400).json({
			success: false,
			message: "Xatolik yuz berdi"
		});
	}
	catch (err) {
		res.status(400).json({
			success: false,
			message: err.message
		});
	}
});


module.exports = router;