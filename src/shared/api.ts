import axios from 'axios';
import internal from 'stream';

const url = 'localhost:5000';

interface SearchRes {
  farmId: Number,
  imgBase64: Number,
  farmName: String,
  itemPrice:  Number,
  productDescription: String
}

interface PredictionResults {
  prediction: string,
  
}

class Server {
  getPrediction(file: File) {
    return axios.post(`${url}/getPrediction`, file);
  }

  postItem(file: File) {
    return axios.post(`${url}/upload`, file);
  }

  search(query: string) {
    return new Promise((resolve, reject) => {
      try {
        axios.get(url).then((res) => {
          const data = res.data;
          resolve(
            data.map((marker):  => ({
              ...marker,
            }))
          );
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default Server;
