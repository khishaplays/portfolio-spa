import { useState } from 'react'
import './App.css'
import ProjectCard from './components/ProjectCard'
import SearchBar from './components/SearchBar'
import AddProjectForm from './components/AddProjectForm'
function App() {
  const [projects, setProjects] = useState([
    {id: 1, title:"Weather App", description:"A react app showing live weather."},
    {id: 2,title:"Recpie Finder", description:"Search recipies by ingredient."},
    {id: 3, title:"Budget Tracker", description:"Track spendings and savings."},
  ])
const [newTitle, setNewTitle] = useState("")
const [newDescription, setNewDescription] = useState("")
const[searchTerm, setSearchTerm] =useState("")
function handleAddProject() {
  const newProject ={
    id: Date.now(),
    title: newTitle,
    description: newDescription,
  }
  setProjects([...projects, newProject])
  setNewTitle("")
  setNewDescription("")
}
const filteredProjects = projects.filter((project) =>
  project.title.toLowerCase().includes(searchTerm.toLowerCase())
)
  return (
    <div className="app">
      <h1>Personal Project Portfolio</h1>
      <AddProjectForm
      newTitle={newTitle}
      setNewTitle={setNewTitle}
      newDescription={newDescription}
      setNewDescription={setNewDescription}
      handleAddProject={handleAddProject}
      />
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project}/>
      ))}
      </div>
      
  )
}

export default App