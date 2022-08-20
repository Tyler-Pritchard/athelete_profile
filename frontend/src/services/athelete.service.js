import http from "../http-common";

class AtheleteDataService {
  getAll() {
    return http.get("/atheletes");
  }
  get(id) {
    return http.get(`/atheletes/${id}`);
  }
  create(data) {
    return http.post("/atheletes", data);
  }
  update(id, data) {
    return http.put(`/atheletes/${id}`, data);
  }
  delete(id) {
    return http.delete(`/atheletes/${id}`);
  }
  deleteAll() {
    return http.delete(`/atheletes`);
  }
  findByTitle(title) {
    return http.get(`/atheletes?title=${title}`);
  }
}
export default new AtheleteDataService();