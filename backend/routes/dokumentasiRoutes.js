const express = require("express");
const router = express.Router();
const { getAllDokumentasi, addDokumentasi } = require("../controllers/dokumentasiController"); // Mengimpor controller

router.get("/kegiatan", getAllDokumentasi);

router.post("/dokumentasi", addDokumentasi);

module.exports = router;
