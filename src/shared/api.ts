import axios from 'axios';

const url = 'http://localhost:5000';

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

const getPrediction = (file: FormData, api: string) => {
  return axios.post(`${url}/api/${api}`, file, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }) as unknown as string;
};

class Server {
  getLeaf(file: FormData): string {
    return getPrediction(file, 'leaves');
  }

  getFruit(file: FormData): string {
    return getPrediction(file, 'fruit');
  }

  postItem(file: FormData): string {
    return axios.post(`${url}/upload`, file) as unknown as string;
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
