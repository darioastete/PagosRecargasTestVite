import axios from "axios";

export default class ApiService {

  constructor () {
    this.axios = axios.create({
      ApiURL = 'http://bun-burn-env.eba-ftyx2m3h.us-east-1.elasticbeanstalk.com',
    })
  }
  
  getActualBalance() {
    return axios.get('getActualBalance');
  }

  getProviders(){
    return axios.get('getProviders');
  }

}

