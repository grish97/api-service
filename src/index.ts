import api from "./services/ApiService";
import BaseRequestModel from "./utils/BaseRequestModel";

console.log(api.get("some").subscribe((observer) => console.log(observer)));
