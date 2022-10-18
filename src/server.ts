import express from "express";
import path from "path";
const app = express();
const PORT = 4327;

app.use(express.static("static"));

/**
 * app.[method]([route], [route handler])
 */
app.get("/", (req, res) => {
  res.sendFile(path.resolve("pages/index.html"));
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
