import { useState, useEffect } from "react";
import './experience.css';

export const Experience = ({ state }) => {

    const [experience, setexperience] = useState([]);
   const [education , seteducation]=useState([]);

    useEffect(() => {
        const { contract } = state;
            const experiencedetails = async () => {
            const Experiencetxn = await contract.allExperienceDetails();
            const allEductationDetail= await contract.allEductationDetails();
            setexperience(Experiencetxn);
            seteducation(allEductationDetail)

    };
  
        contract && experiencedetails();

    }, [state]);


            return (
              
                <section className="exp-section">
                <h1 className="title">Experience & Education </h1>
    
                <div className="container">
    
                    <div className="education">
                        <h1 className="edu-tittle">Experience</h1>
                        {experience.map((exp)=>(
                        
                            <div key={exp.experienceCount} className="edu-card">
                            <p className="card-text1">
                               {exp.date}
                            </p>
                           <h3 className="card-text2">{exp.jobTitle}</h3>
                            <p className="card-text3">{exp.knowledgeAcquired}</p>
                            <p className="card-text4">
                          {exp.companyName}
                            </p>
                        </div>
                        ))}
                     
                       
                    </div>
                    {/* experience */}
                    <div className="education">
                        <h1 className="edu-tittle">Education</h1>
                        {education.map((exp)=>(
                        
                        <div key={exp.id} className="edu-card">
                        <p className="card-text1">
                           {exp.date}
                        </p>
                     
                        <p className="card-text2">{exp.fieldOfStudy}</p>
                        <h3 className="card-text3">{exp.typeOfDiploma}</h3>
                        <p className="card-text4">
                      {exp.institutionName}
                        </p>
                    </div>
                    ))}
                    </div>
                </div>
            </section>
            
            )
    
    }
    export default Experience;