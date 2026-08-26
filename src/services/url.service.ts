import AppError from "@/config/app-error.js";
import URLRepository from "@/repositories/url.repository.js";

export default class URLService {
  private urlRepository: URLRepository;

  constructor(urlRepository = new URLRepository()) {
    this.urlRepository = urlRepository;
  }

  public async createShortURL(originalUrl: string) {
    try {
      return await this.urlRepository.save(originalUrl);
    } catch (error) {
      console.log(error);
      throw new AppError("Couldn't generate your short URL");
    }
  }

}
