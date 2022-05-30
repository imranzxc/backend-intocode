const { Router } = require('express')
const { studentController } = require('../controllers/student.controller')

const router = Router()

router.post('/student', studentController.postStudent)
router.get('/group/:id/student', studentController.getStudentByGroup)
router.get('/student', studentController.getAllStudent)
router.get('/student/:id', studentController.getStudentById)
router.patch('/student/:id', studentController.patchStudent)
router.delete('/student/:id', studentController.deleteStudentById)

router.get('/student/payment/full', studentController.fullPayment)
router.get('/student/payment/half', studentController.halfPayment)
router.get('/student/payment/un', studentController.unPayment)



module.exports = router