const { Router } = require('express')
const { groupController } = require('../controllers/group.controller')

const router = Router()

router.post('/group', groupController.postGroup)
router.get('/group', groupController.getAllGroup)
router.get('/group/week/:id', groupController.getWeekGroup)
router.get('/group/finished/:id', groupController.getFinishedGroup)
router.get('/group/:id', groupController.getGroupById)
router.get('/group/offer/:id', groupController.studentOffer)
router.patch('/group/:id', groupController.patchGroup)
router.delete('/group/:id', groupController.deleteGroupById)


module.exports = router