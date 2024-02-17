const router = require('express').Router()

const noteCtrl = require('../controllers/noteCtrl')

router.route('/')
    .get(noteCtrl.getNotes)
    .post(noteCtrl.createNote)

router.route('/:id')
    .get(noteCtrl.getNote)
    .put(noteCtrl.updateNote)
    .delete(noteCtrl.deleteNote)


module.exports = router
