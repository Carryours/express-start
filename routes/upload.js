var express = require('express');
var router = express.Router();


router.post('/', (req, res) => {
	if (!req.file) {
		return res.status(400).send('没有文件被上传。');
	}
	res.send({
		fileName: req.file.filename
	});
});

module.exports = router;
