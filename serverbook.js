import express from "express";
import axios from "axios";
import * as cheerio from "cheerio";
import cors from "cors";

const app = express();

// CORS first
app.use(cors({
  origin: "http://localhost:5173",
}));

app.options("*", cors());

app.get("/data", async (req, res) => {
  try {
    const { data } = await axios.get("https://www.grammarbook.com/");
    const $ = cheerio.load(data);

    const result = [];
    $("a").each((i, el) => {
      result.push({
        text: $(el).text(),
        link: $(el).attr("href"),
      });
    });

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Scraping failed" });
  }
});

// 🔥 THIS WAS MISSING
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});