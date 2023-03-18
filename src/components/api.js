export const fetchAPI = function (date) {
  const apiUrl = `https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js?date=${date.toISOString()}`;
  const corsUrl = "https://cors-anywhere.herokuapp.com/corsdemo";
  return fetch(corsUrl + apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch available reservation times");
      }
      return response.json();
    })
    .then((data) => data.times)
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const submitAPI = function (formData) {
  const url =
    "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js";
  const options = {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }
      return response.json();
    })
    .then((data) => true)
    .catch((error) => {
      console.error(error);
      return false;
    });
};
