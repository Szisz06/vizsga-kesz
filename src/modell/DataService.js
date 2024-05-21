import axios from "axios";

export default class DataService {
  constructor() {
    axios.defaults.baseURL = "http://localhost:8000/api/";
  }
  
  getData(vegpont, callback) {
    axios
      .get(vegpont)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }
}