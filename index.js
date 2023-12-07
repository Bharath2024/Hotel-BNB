const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// SQLite setup
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "database.sqlite"), // Change the database file path
});

// Define the User model
const User = sequelize.define("User", {
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  password: DataTypes.STRING,
});

// Sync the model with the database
sequelize.sync();

app.set("port", process.env.PORT || 5000);

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Booking Form page
app.get("/BookingForm", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "booking.html"));
});

app.post("/BookingForm", async (req, res) => {
  const { name, address, email, contact_no, indate, outdate } = req.body;

  try {
    // Assuming you have a User model or a table in your database
    const user = await db.query(
      "INSERT INTO users (Full Name, email,Check indate, Check outdate) VALUES (?, ?, ?, ?, ?, ?)",
      ["FullName, email,Check indate, Check outdate"]
    );

    // You can also perform additional actions here if needed

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Booking failed. Please try again.");
  }
});

// Deluxe Booking Form page
app.get("/deluxeRoom", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "deluxe.html"));
});

app.post("/deluxeRoom", async (req, res) => {
  const { name, address, email, contact_no, indate, outdate } = req.body;

  try {
    // Assuming you have a User model or a table in your database
    const user = await db.query(
      "INSERT INTO users (Full Name, email,Check indate, Check outdate) VALUES (?, ?, ?, ?, ?, ?)",
      ["FullName, email,Check indate, Check outdate"]
    );

    // You can also perform additional actions here if needed

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Booking failed. Please try again.");
  }
});

// family Booking Form page
app.get("/FamilyRoom", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "family.html"));
});

app.post("/FamilyRoom", async (req, res) => {
  const { name, address, email, contact_no, indate, outdate } = req.body;

  try {
    // Assuming you have a User model or a table in your database
    const user = await db.query(
      "INSERT INTO users (Full Name, email,Check indate, Check outdate) VALUES (?, ?, ?, ?, ?, ?)",
      ["FullName, email,Check indate, Check outdate"]
    );

    // You can also perform additional actions here if needed

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Booking failed. Please try again.");
  }
});

// Luxury Booking Form page
app.get("/LuxuryRoom", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Luxury.html"));
});

app.post("/FamilyRoom", async (req, res) => {
  const { name, address, email, contact_no, indate, outdate } = req.body;

  try {
    // Assuming you have a User model or a table in your database
    const user = await db.query(
      "INSERT INTO users (Full Name, email,Check indate, Check outdate) VALUES (?, ?, ?, ?, ?, ?)",
      ["FullName, email,Check indate, Check outdate"]
    );

    // You can also perform additional actions here if needed

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Booking failed. Please try again.");
  }
});

app.get("/privacy&policy", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "privacy.html"));
});

app.get("/terms&condition", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "terms.html"));
});

app.get("/faq", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "faq.html"));
});

app.get("/cancelation", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "cancel.html"));
});

app.get("/Rooms", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "rooms.html"));
});

app.get("/chat", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "chat.html"));
});

app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});
