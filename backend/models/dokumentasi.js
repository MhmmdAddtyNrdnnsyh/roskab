const db = require('../config/db');

const Dokumentasi = {
  getAll: (callback) => {
    db.query("SELECT * FROM dokumentasi ORDER BY created_at DESC", callback); 
  },
  
  add: (title, description, date, callback) => {
    const query = "INSERT INTO dokumentasi (title, description, date) VALUES (?, ?, ?)";
    db.query(query, [title, description, date], callback);
  }
};

module.exports = Dokumentasi;
