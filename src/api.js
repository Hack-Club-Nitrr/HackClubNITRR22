import axios from "axios";

export function getAllArticles() {
  return new Promise((resolve, reject) => {
    
      const url =
        "https://peaceful-river-16673.herokuapp.com/providers/get_projects/";
      axios
        .get(url)
        .then((res) => {
          localStorage.setItem("projects", JSON.stringify(res.data));
          resolve(res.data);
        })
        .catch((err) => reject(err));
    
  });
}
