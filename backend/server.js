const express = require("express");
const app = express();
const cors = require("cors");
const dokumentasiRoutes = require("./routes/dokumentasiRoutes"); 

app.use(cors());
app.use(express.json()); 

app.use("/api", dokumentasiRoutes);

// Menjalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
