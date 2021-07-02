import express from "express";
import shortid from "shortid";
import Url from "../models/Urls.js";
import validateUrl from "../utils/utils.js";

const Router = express.Router();

// Short URL generator
Router.post("/", async (req, res) => {
  const { origUrl } = req.body;
  const base = process.env.BASE;

  const urlId = shortid.generate();
  if (utils.validateUrl(origUrl)) {
    try {
      let url = await Url.findOne({ origUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${base}/${urlId}`;

        url = new Url({
          origUrl,
          shortUrl,
          urlId,
        });
        await url.save();
        res.json(url);
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("Invalid URL");
  }
});

export default Router;
