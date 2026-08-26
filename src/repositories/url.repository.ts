import Url from "@/models/url.model.js";

export default class URLRepository {
  public async save(originalUrl: string) {
    const newShortUrl = new Url({ originalUrl });
    return await newShortUrl.save();
  }

  public async find() {}
}
