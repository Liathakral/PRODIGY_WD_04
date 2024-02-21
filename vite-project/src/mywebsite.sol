 //SPDX-Liscence-Identifier:MIT
 // SPDX-License-Identifier: SEE LICENSE IN LICENSE
 pragma solidity ^0.8.20;


contract portfolio{

    struct Projects {
        uint id;
        string name;
        string image;
        string description;
        string githubLink;
   
    }
    struct Education{
        uint id;
        string typeOfDiploma;
        string date;
        string institutionName;
        string fieldOfStudy;

    }
struct Experience{
    uint experienceCount;
        string jobTitle;
        string date;
        string companyName;
        string knowledgeAcquired;

    }

  string public imageLink="Qmf49deAFTTXbL22VMgEq49SAZEp3pqTc1m3TuoRCP6jPo";
  string public description="For more than a year, I've delved into the world of blockchain, actively applying my knowledge in projects and internships. My skills range from front-end development to the complexities of creating and deploying smart contracts, reflecting a comprehensive understanding of the blockchain ecosystem.";
  string public resumeLink="QmcLDiqGkWDVpJt5hwr4EzTgfvCqtVs2eEVAXx36Zkij2W";
Projects[3] public projects;
Education[2] public education;
 Experience[3] public experienceDetails;
  uint projectCount;
  uint educationCount;
    uint experienceCount;
  address public manager;

  constructor(){
      manager=msg.sender;
  }

 modifier onlyManager(){
      require(manager==msg.sender,"You are not the manager");
      _;
  }
     
     function insertProject(string calldata _name,string calldata _description,string calldata _image,string calldata _githubLink) external{
      require(projectCount<3,"Only 3 projects allowed");
      projects[projectCount] = Projects(projectCount,_name,_image,_description,_githubLink);
      projectCount++;
  }
  function changeProject(string calldata _name,string calldata _description,string calldata _image,string calldata _githubLink,uint _projectCount) external{
       require(_projectCount>=0 && _projectCount<3,"Only 3 projects allowed");
      projects[_projectCount] = Projects(_projectCount,_name,_image,_description,_githubLink);
  }
      function allProjects() external view returns(Projects[3] memory){
        return projects;
    }

     function insertEducation(string calldata _date,string calldata _degree,string calldata _typeOfDiploma,string calldata _instutionName) external  onlyManager{
     require(educationCount<2,"Only 2 education details allowed");
     education[educationCount]=Education(educationCount,_typeOfDiploma,_date,_instutionName,_degree);
     educationCount++;
    }

 function changeEducation(uint _educationCount,string calldata _date,string calldata _degree,string calldata _typeOfDiploma,string calldata _instutionName) external  onlyManager{
          require(_educationCount>=0 && _educationCount<3,"Invalid educationCount");
 education[_educationCount]=Education(_educationCount,_typeOfDiploma,_date,_instutionName,_degree);
  
 }


 function allEductationDetails() external view returns(Education[2] memory){
      return education;
  }// uint experienceCount;
        // string jobTitle;
        // string date;
        // string companyName;

  function insertExperience(string calldata _date,string calldata _jobtitle,string calldata _knowledgeAcquired,string calldata _companyName) external  onlyManager{
     require(experienceCount<3,"Only 3 education details allowed");
     experienceDetails[experienceCount]=Experience(experienceCount,_jobtitle,_date,_companyName,_knowledgeAcquired);
     experienceCount++;
    }

    function changeExperience(string calldata _date,string calldata _jobtitle,string calldata _knowledgeAcquired,string calldata _companyName,uint _experienceDetailCount) external  onlyManager{
     require(_experienceDetailCount>=0 && _experienceDetailCount<3,"Invalid experienceCount");
     experienceDetails[_experienceDetailCount]=Experience(_experienceDetailCount,_jobtitle,_date,_companyName,_knowledgeAcquired);
    }
    
    function allExperienceDetails() external view returns(Experience[3] memory){
      return experienceDetails;
    }
     function changeDescription(string calldata _description) external{
      description=_description;
  }

    function changeResumeLink(string calldata _resumeLink) external onlyManager{
      resumeLink=_resumeLink;
  }
     function changeImageLink(string calldata _imageLink) external onlyManager{
      imageLink=_imageLink;
  }

}