import axios from 'axios';

const url = 'localhost:5000';

class Server {
  getPrediction(file: File) {
    return axios.post(`${url}/api/getPrediction`, file);
  }

  postItem(file: File) {
    return axios.post(`${url}/api/upload`, file);
  }
}

export default Server;
