const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/wpu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// // menambah 1 data
// const contact1 = new Contact({
//   nama: "ayaaku",
//   nohp: "08765435",
//   email: "dasasd@ashweqd.eqw",
// });

// // simpan kontak ke collection
// contact1.save().then((result) => console.log(result));
