import axios from 'axios';

const url = 'localhost:5000';

interface SearchRes {
  imageURL: string,
  itemHealth: string,
  
}

interface PredictionResults {
  imageURL: string,
  itemHealth: string,
  
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
