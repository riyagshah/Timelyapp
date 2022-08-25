import { Box } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProjectCard from '../Components/ProjectCard'
import ProjectsHeader from '../Components/ProjectsHeader'
import { getProjets } from '../Redux/AppReducer/action'
// import {v4 as uuid} from "uuid"

const Project = () => {

  const projects = useSelector((store) => store.AppReducer.projectName);
  console.log(projects)
  const dispatch = useDispatch();


  useEffect(() => {
    // if (projects.length === 0) {
      dispatch(getProjets());
    //}
  },[projects.length])



  return (
      <>
      <ProjectsHeader />
      <Box>
        {
          projects.length > 0 && projects.map(() => {
            return <>
                  <ProjectCard projects />
                   </>
          })
        }
      </Box>
      </>
  )
}

export default Project