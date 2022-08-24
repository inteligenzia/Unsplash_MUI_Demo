import axios from "axios";

export const connection = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID EIy_lyboKJ0Hm7Xes_9TGyt2UCTN-NS09mnBugutjVs"
  }
});

export const getImageList = async (term) => {
  const response = await connection.get("/search/photos", {
    params: { query: term }
  });

  console.log(this);

  return response.data.results;
};
