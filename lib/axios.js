import axios from "axios";

const headers = {
  "X-RapidAPI-Key": process.env.RAPID_API_KEY,
  "X-RapidAPI-Host": "bayut.p.rapidapi.com",
};

const apiClient = axios.create({
  baseURL: "https://bayut.p.rapidapi.com",
  headers: headers,
});

export const fetchBayutData = () => {
  const urls = [
    /* your list of URLs */
  ];
  const results = [];

  const fetchNextUrl = (index) => {
    if (index >= urls.length) {
      // do something with the results
      return;
    }

    apiClient
      .get(urls[index])
      .then((response) => {
        results.push(response.data);
        setTimeout(() => {
          fetchNextUrl(index + 1);
        }, 500); // add a delay of 500ms between requests
      })
      .catch((error) => {
        // handle error
      });
  };

  fetchNextUrl(0);
};
