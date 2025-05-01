const Dokumentasi = require("../models/Dokumentasi");

const getAllDokumentasi = (req, res) => {
  Dokumentasi.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching data", error: err });
    }
    res.json(results); 
  });
};

const addDokumentasi = (req, res) => {
  const { title, description, date } = req.body;

  Dokumentasi.add(title, description, date, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error adding data", error: err });
    }
    res.status(201).json({ message: "Dokumentasi added successfully", id: results.insertId });
  });
};

module.exports = { getAllDokumentasi, addDokumentasi };
