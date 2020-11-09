const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const multer = require('multer');
const fs = require('fs');
require('dotenv/config');

const admin_url = process.env.admin_url
const localhost = process.env.backend
const frontend = process.env.frontend

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/');
	},
	filename: function (req, file, cb) {
		const type = file.originalname.split('.');
		cb(null, `${new Date().getTime()}.${type[type.length - 1]}`);
	}
});

const fileFilter = (req, file, cb) => {
	// reject a file
	cb(null, file.mimetype.includes('image'));
};

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5
	},
	fileFilter: fileFilter
});

function deleteFile(path) {
	fs.stat(path, function (err, stats) {
		if (err) {
			return console.error(err);
		}

		fs.unlink(path, function (err) {
			if (err) {
				return console.log(err);
			}
		});
	});
}


router.get('/', async (req, res) => {
	try {
		const services = await Service.find().sort({ date: -1 });
		res.status(200).json(services);
	}
	catch (err) {
		res.status(400).json({
			success: false,
			message: err.message
		});
	}
});

router.post('/', async (req, res) => {
	try {
		const servise = new Service({
			// image: `uploads/${req.file.filename}`,
			title: req.body.title,
			type: req.body.type,
			price: req.body.price
		});

		const saved = await servise.save();
	res.redirect(`http://ximchistka24.uz/${admin_url}`)
		// res.status(200).json(saved);
	}
	catch (err) {
		res.status(400).json({
			success: false,
			message: err.message
		});
	}
});


router.post('/:id', async (req, res) => {
	try {
		const update = await Service.findByIdAndUpdate(req.params.id,
			{
				$set: {
					title: req.body.title,
					type: req.body.type,
					price: req.body.price
				}
			}, { new: true }
		);

		const saved = await update.save()
	res.redirect(`http://ximchistka24.uz/${admin_url}`)
		// res.status(200).json(update);
	}
	catch (err) {
		res.status(400).json({
			success: false,
			message: err.message
		});
	}
});

router.patch('/image/:id', upload.single('image'), async (req, res) => {
	try {
		const servise = await Service.findById(req.params.id);
		deleteFile(servise.image);
		servise.image = `uploads/${req.file.filename}`;
		const update = await servise.save();

		res.status(200).json(update);
	}
	catch (err) {
		res.status(400).json({
			success: false,
			message: err.message
		});
	}
})

// Delete post/////////////////////////////////
// router.post('/:id', async (req, res) => {
// 	try {
// 		const servise = await Service.findByIdAndUpdate(req.params.id);
// 		// deleteFile(servise.image);
// 		// await servise.remove();

// 	res.redirect(`http://ximchistka24.uz/${admin_url}`)
// 		// res.status(200).json({
// 		// 	success: true,
// 		// 	message: "Xizmat muvaffaqiyatli o'chirildi!"
// 		// });
// 	}
// 	catch (err) {
// 		res.status(400).json({
// 			success: false,
// 			message: err.message
// 		});
// 	}
// });


module.exports = router;
