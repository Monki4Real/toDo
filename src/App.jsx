import { useState } from 'react'
import { CreateTask } from './components/createTask'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  return (
    <Router>
      <div className='App'>
        <nav className='Menu'>
          <ul>
            <Link to="/create-task">
              <li className='button-text cursor-pointer bg-[#fafafa] m-5 rounded-lg text-center p-2'>
                Create task
              </li>
            </Link>
            <Link to="/">
              <li className='button-text cursor-pointer bg-[#fafafa] m-5 rounded-lg text-center p-2'>
                View all tasks
              </li>
            </Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={
            <div className="info mt-10 flex flex-col">
              {tasks.map((task, index) => (
                <div key={index} className='block rounded-lg mt-5'>
                  <p>{task}</p>
                </div>
              ))}
            </div>
          } />
          <Route path="/create-task" element={<CreateTask addTask={addTask} />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App
