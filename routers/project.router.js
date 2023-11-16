import express from 'express'
import { addProject, deleteProject, getAllProjects, getSingleProject, updateProject } from '../controllers/project.controller'
const projectRouter = express.Router()

projectRouter.get('/get-projects',getAllProjects)
projectRouter.get('/get-single-project/:project_id',getSingleProject)
projectRouter.post('/add-project',addProject)
projectRouter.put('/update-project/:project_id',updateProject)
projectRouter.delete('/delete-project/:project_id',deleteProject)

export default projectRouter
