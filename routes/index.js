const { Router } = require("express");

const router = Router();

router.use(require("./group.route"));
router.use(require("./note.route"));
router.use(require("./student.route"));

module.exports = router;
