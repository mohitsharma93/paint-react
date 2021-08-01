import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "./modules/modals/slice";
import { loadProject } from "./modules/strokes/loadProjects";
import { getProjectsList } from "./modules/projectsList/getProjectsList";
import { projectsListSelector } from "./modules/projectsList/selectors";

export const ProjectsModal = () => {
  const projectList: any = useSelector(projectsListSelector);
  const dispatch = useDispatch();

  const onLoadProject = (projectId: string) => {
    dispatch(loadProject(projectId));
    dispatch(hide());
  }


  useEffect(() => {
    dispatch(getProjectsList());
  }, [])

  return (
    <div className="window modal-panel">
      <div className="title-bar">
        <div className="title-bar-text">Counter</div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={() => dispatch(hide())}></button>
        </div>
      </div>
      <div className="projects-container">
        {(projectList.projects || []).map((project: any) => {
          return (
            <div className="project-card" key={project.id} onClick={() => onLoadProject(project.id)} >
              <img src={project.image} alt="thumbnail" />
              <div>{project.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}