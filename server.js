const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/images", require("./routes/images"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
