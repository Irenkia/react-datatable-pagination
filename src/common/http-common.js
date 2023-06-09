import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8080/api/v1",
  baseURL: "http://spring-azure-sql-pagination.azurewebsites.net/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});
