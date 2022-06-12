import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers["Content-Type"] = "multipart/form-data";

// Token expire error
axios.interceptors.response.use(
  function (response) {
    if (response.data.error === "API token expired") get_token();
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const current_token = localStorage.getItem("fixably_token");
if (current_token) {
  axios.defaults.headers["X-Fixably-Token"] = current_token;
} else {
  get_token();
}

function get_token() {
  axios.post("token", { Code: 29321714 }).then((res) => {
    const token = res.data.token;
    localStorage.setItem("fixably_token", token);
    axios.defaults.headers["X-Fixably-Token"] = token;
  });
}
