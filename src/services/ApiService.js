import axios from "axios";
import { useRouter } from 'vue-router';

export default class ApiService {
  constructor () {
    const token = import.meta.env.VITE_TOKEN;
    this.axios = axios.create();
    this.router = useRouter();

    this.axios.interceptors.request.use(
      (config) => {
        config.headers['Authorization'] = `Bearer ${token}`
        return config;
      },
      (error) => {
        console.error('Interceptor de solicitud error:', error);
        return Promise.reject(error);
      }
    );
    this.axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        router.push('/404');
      return Promise.reject(error);
      }
    );
  }

  async getActualBalance() {
    try {
      const response = await this.axios.get('/api/getActualBalance');
      return response.data.data.balanceCommerce;
    } catch (error) {
      throw error;
    }
  }

  async getProviders(){
    try {
      const response = await this.axios.get('/api/getProviders');
      return response.data.data.companies;
    } catch (error) {
      throw error;
    }
  }

}

