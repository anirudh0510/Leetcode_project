const axios = require("axios");

// we will use  axios , it is just like fetch but on steroids , it automatically convert into json
const getLanguageById = (lang) => {
  const language = {
    "c++": 54,
    java: 62,
    javascript: 63,
  };

  return language[lang.toLowerCase()];
};

const submitBatch = async (submissions) => {
  const options = {
    method: "POST",
    url: "https://judge0-ce.p.rapidapi.com/submissions/batch",
    params: {
      base64_encoded: "false",
    },
    headers: {
      "x-rapidapi-key": "a3e3af3180msha00cd55eae38518p1818c6jsn3bc52a7eaf16",
      "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      submissions,
    },
  };

  async function fetchData() {
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  return await fetchData();
};

const waiting = async (timer) => {
  setTimeout(() => {
    return 1;
  }, timer);
};

const submitToken = async (resultToken) => {
  const options = {
    method: "GET",
    url: "https://judge0-ce.p.rapidapi.com/submissions/batch",
    params: {
      tokens: resultToken.join(","),
      base64_encoded: "false",
      fields: "*",
    },
    headers: {
      "x-rapidapi-key": "a3e3af3180msha00cd55eae38518p1818c6jsn3bc52a7eaf16",
      "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
    },
  };

  while (true) {
    async function fetchData() {
      try {
        const response = await axios.request(options);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }

    const result = await fetchData();

    const IsResultObtained = result.submissions.every((r) => r.status_id > 2);
    if (IsResultObtained) return result.submissions;
    await waiting(1000);
  }
};

module.exports = { getLanguageById, submitBatch, submitToken };
