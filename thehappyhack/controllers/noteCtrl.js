const Notes = require('../models/noteModel')

const noteCtrl = {
    getNotes: async (req, res) =>{
        try{
            //res.json({user_id:req.user.id})
            const notes = await Notes.find()
            res.json(notes)
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createNote: async (req,res) => {
        try{
            //res.json({user_id:req.user.id})
            const {title, content, date} = req.body;
            // res.json({name})
            const newNote = new Notes({
                title,
                content,
                date
            })
            await newNote.save()
            res.json({msg: "Created a new note!"})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteNote: async(req, res) => {
        try{
            await Notes.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Note"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }

    },
    updateNote: async(req, res) => {
        try{
            const {title, content, date} = req.body;
            await Notes.findByIdAndUpdate({_id:req.params.id }, {
                title, 
                content,
                date
            })
            res.json({msg: "Updated a Note"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }

    },
    getNote: async(req, res) => {
        try{
            const note = await Notes.findById(req.params.id)
            res.json(note)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }

    }

}

module.exports = noteCtrl