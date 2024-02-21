import { useState, useEffect } from "react";
import './projects.css';


export const Projects = ({ state }) => {
    const [Project, setProjects] = useState([]);
    useEffect(() => {
        const { contract } = state;
        const projectDetails = async () => {
                const projectss = await contract.allProjects();
                setProjects(projectss);
    };

                contract && projectDetails();

    }, [state]);

    return (
        <section className="project-section">
        <h1 className="title">Projects </h1>
        <div className="card-wrapper">
   

            {Project.map((project) => {
                        let githublink = project.githubLink;
                        return(
           
                        <a href= {githublink} className="project-card" target='_blank' rel="noopener noreferrer" >
                        <div className="card-img">
                        <img src={`https://ipfs.io/ipfs/${project.image}`} alt="image" /></div>
                        <div className="card-text">
                        <h3> {project.name}</h3>
                      
                        <p>{project.description}</p>
                        
                        </div>
                        </a>
                        )
                        })};

        </div>
        </section>
    );
        }
 export default Projects;