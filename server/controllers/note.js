const Note = require("../models/noteModel");
const CustomError = require("../models/CustomError");

exports.getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find();
    res.status(200).json({ notes });
  } catch (error) {
    next(new CustomError(error.message, 500));
  }
};

exports.addNote = async (req, res, next) => {
  try {
    const body = req.body;
    const note = new Note({
      name: body.name,
      description: body.description,
      status: body.status,
    });
    const newNote = await note.save();
    const allNotes = await Note.find();
    res
      .status(201)
      .json({ message: "Note added", note: newNote, notes: allNotes });
  } catch (error) {
    next(new CustomError(error.message, 500));
  }
};

exports.deleteNote = async (req, res, next) => {
  try {
    const deletedNote = await Note.findByIdAndRemove(req.params.id);
    if (deletedNote == null) {
      return res.status(404).json({
        message: "Note not found",
      });
    }
    const allNotes = await Note.find();
    res.status(200).json({
      message: "Note deleted",
      note: deletedNote,
      notes: allNotes,
    });
  } catch (error) {
    next(new CustomError(error.message, 500));
  }
};
