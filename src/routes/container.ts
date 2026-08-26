import URLController from "@/controllers/url.controller.js";
import URLService from "@/services/url.service.js";
import URLRepository from "@/repositories/url.repository.js";

const urlRepository = new URLRepository();
const urlService = new URLService(urlRepository);
const urlController = new URLController(urlService);


export {
    urlController
}