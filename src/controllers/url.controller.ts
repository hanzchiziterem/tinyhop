import type { Request, Response } from "express";

import urlSchema from "@/schemas/url.schema.js";
import URLService from "@/services/url.service.js";

export default class URLController {
  private urlService: URLService;

  constructor(urlService = new URLService()) {
    this.urlService = urlService;
  }
  public createShortURL = async (req: Request, res: Response) => {
    const urlInput = urlSchema.safeParse(req.body);
    if (!urlInput.success) {
      return res.status(400).json({
        success: false,
        message: urlInput.error.issues[0]!.message,
      });
    }

    const { originalUrl } = urlInput.data;
    const newShortUrl = await this.urlService.createShortURL(originalUrl);
    return res.status(201).json({ success: true, newShortUrl });
  };
}
