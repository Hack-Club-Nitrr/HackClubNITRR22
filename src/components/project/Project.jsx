import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Layout } from '../blog/Layout';

export const Project = () => {

    const  [projects,setProjects]= useState([])

    useEffect(()=>{
        const url="https://peaceful-river-16673.herokuapp.com/providers/get_projects/"

        axios.get(url).then((res)=>{
            console.log(res.data)
            setProjects(res.data)
            localStorage.setItem("projects", JSON.stringify(res.data))
        })

    },[])

    

  return (
    <div>
        {projects.map((project, id)=>{
            return(
                <div>
                    id: {project.id}
                    <br />
                    title : {project.title}
                    <br />
                    author : {project.author}
                    <br />
                    date :{ project.date}
                    <br />
                    <Link  to={'/blogs/' + project.id} >read</Link>

                    <br />
                    <hr />
                    <br />
                </div>
            )
        })}
    </div>
  )
}
