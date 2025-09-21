import Note from "../models/Note.js";

export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); //Eger en son eklenenden ilk eklenene gitmesini istiyorsak -1 diger turlu 1
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({ message: "Note not foubd" });

    res.json(note);
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true, //Database'de guncellenmesine ragmen bize bilginin eski halini dondurmemesi icin burada true yaparak bilginin guncellenmis olarak gelmesini sagladik
      }
    );

    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" }); //Burdada eger ilgili id yok ise bize 404 hatasini vermesi icin bir kosul blogu koyduk

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const { title, content } = req.body;
    const deletedNotes = await Note.findByIdAndDelete(
      req.params.id,
      { title, content },
      {
        new: true,
      }
    );

    if (!deletedNotes)
      return res.status(404).json({ message: "Note not found" });

    res.status(200).json(deletedNotes);
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
