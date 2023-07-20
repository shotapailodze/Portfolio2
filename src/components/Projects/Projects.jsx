import React from 'react'
import './Projects.scss'

const Projects = () => {
    const projectList = [
        {
            title: 'Crown Clothing',
            imgSrc: 'https://user-images.githubusercontent.com/55694002/241297257-ef274a90-dab4-4c18-bb0b-4a1c85fcb318.png',
            description: 'E-Commerce Website',
            gitRepo: 'https://github.com/shotapailodze/crown-clothing',
            liveServer: 'https://reactshopify-carts.netlify.app/'
        }
    ]

  return (
    <div className='coding-projects'>
        <h1>Coding Projects</h1>
        <div className='project-container'>
                <div className='project'>
                    <img src="https://user-images.githubusercontent.com/55694002/252044772-6308e5d1-22bc-42db-882f-e9f599a88059.png" alt="" />
                    <h2>Name</h2>
                    <p>Description</p>
                    <div>
                        <button>View Live</button>
                        <button>Github</button>

                    </div>
                </div>
                {
                    projectList && projectList.map((element, index) => {
                    return (
                        <div className='project'>
                            <img src={element.imgSrc} alt={element.description} />
                            <h2>{element.title}</h2>
                            <p>{element.description}</p>
                            <div>
                                <a href={element.liveServer} target='_blank'><button>View Live</button></a>
                                <a href={element.gitRepo} target='_blank'><button>Github</button></a>
                            </div>
                        </div>
                    )
                })}
            
        </div>
    </div>
  )
}

export default Projects