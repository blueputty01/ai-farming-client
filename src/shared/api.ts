import axios from 'axios';

const url = 'localhost:5000';

interface SearchRes {
  farmId: number;
  imgBase64: string;
  farmName: string;
  itemPrice: number;
  productDescription: string;
}

interface PredictionResults {
  prediction: string;
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
            data.map((marker: SearchRes) => ({
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

export type { SearchRes };
