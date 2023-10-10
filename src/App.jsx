import { useState, useEffect} from 'react'
import './App.css'
import { TaskCreator } from './components/TaskCreator'


function App() {

  const [taskItems, setTaskItems] = useState([])

  function createNewTask(taskName){
   if (!taskItems.find(task => task.name === taskName)){
    setTaskItems([...taskItems, {name: taskName,done: false }])
  }
}
useEffect(()=>{
let data = localStorage.getItem('tasks')
if(data){
  setTaskItems(JSON.parse(data))
}
},[ ])

useEffect(()=>{
  localStorage.setItem('tasks',JSON.stringify(taskItems))
},[ taskItems ])
  return (
    
      <div className='app'>
        <TaskCreator createNewTask={createNewTask} />
        <table>
          <thead>
            <tr>
              <th>tasks</th>
            </tr>
          </thead>
          <tbody>
           {
              taskItems.map(task => (
                <tr key={task.name}>
                  <td>
                  {task.name}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
       
      
      );
}

      export default App
