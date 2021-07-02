import express from "express";
import Url from "../models/Urls.js";

const indexRouter = express.Router();

indexRouter.get("/:urlId", async (req, res) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    if (url) {
      url.clicks++;
      url.save();
      return res.redirect(url.origUrl);
    } else res.status(404).json("Not found");
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
});

export default indexRouter;
