import projectModel from "../models/project.model";

export const getAllProjects = async (req, res) => {
  try {
    const projectData = await projectModel.find();
    if (projectData) {
      return res.status(200).json({
        data: projectData,
        message: "Success",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const getSingleProject = async (req, res) => {
  try {
    const projectID = req.params.project_id;
    const project = await projectModel.findOne({ _id: projectID });
    if (project) {
      return res.status(200).json({
        data: project,
        msg: "sucesss",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const updateProject = async (req, res) => {
  try {
    const projectID = req.params.project_id;
    const { title, description, startDate, endDate, tasks, status } = req.body;
    const projectData = await projectModel.updateOne(
      { _id: projectID },
      {
        $set: {
          title,
          description,
          startDate,
          endDate,
          tasks,
          status,
        },
      }
    );
    if (projectData.acknowledged) {
      return res.status(200).json({
        data: projectData,
        message: "Project Added Successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const addProject = async (req, res) => {
  try {
    const { title, description, startDate, endDate, tasks, status } = req.body;
    const projectData = new projectModel({
      title,
      description,
      startDate,
      endDate,
      tasks,
      status,
    });
    projectData.save();
    if (projectData) {
      return res.status(201).json({
        data: projectData,
        message: "Project Added Successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteProject = async (req, res) => {
  try {
    const projectID = req.params.project_id;
    const project = await projectModel.deleteOne({ _id: projectID });
    if (project) {
      return res.status(200).json({
        msg: "sucesss",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
