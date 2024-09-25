

const API = "https://66f3ceb577b5e8897096ef2a.mockapi.io/user";

const getProjects = () => axios.get(`${API}/projects`)
const getProjectId = (id) => axios.get(`${API}/projects/${id}`)
const addProject =  (projectdata) => axios.post(`${API}/projects`,projectdata)
const editProject = (id , projectdata) => axios.put(`${API}/projects/${id}` , projectdata)
const deleteProject = (id) => axios.delete(`${API}/projects/${id}`)

export {
    getProjects,
    getProjectId,
    addProject,
    editProject,
    deleteProject
 
}
