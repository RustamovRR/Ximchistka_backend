const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin')
require('dotenv/config')

const user_Id = process.env.user_Id

router.post('/', async (req, res) => {
	try {
		const admin = await Admin.findById(user_Id)

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