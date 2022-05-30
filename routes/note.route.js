const { Router } = require('express')
const { noteController } = require('../controllers/note.controller')

const router = Router()

router.post('/note', noteController.postNote)
router.get('/note', noteController.getAllNotes)
router.get('/note/:id', noteController.getNoteById)
router.patch('/note/:id', noteController.patchNote)
router.delete('/note/:id', noteController.deleteNoteById)
router.get('/student/note/:id', noteController.getNotesByStudent)



module.exports = router