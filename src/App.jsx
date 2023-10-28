import { useState } from "react"; 
import "./App.css"

function App() { 
  const [tasks, setTasks] = useState([]); 
  const [task, setTask] = useState(""); 
  const [line, setLine] = useState([false]); 
 
  const addTask = () => { 
    if (task.trim() !== "") { 
      setTasks([...tasks, task]); 
      setTask(""); 
      setLine([...line, false]); 
    } 
  }; 
 
  const setThis = (index) => { 
    let arr = line.map((item, i) => { 
      if (i === index) { 
        return !item; 
      } else { 
        return item; 
      } 
    }); 
    setLine(arr); 
  }; 
  console.log(line); 
  const textStyle = { 
    textDecoration: "line-through", 
  }; 


  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return ( 
    <> 
      <div className="bg-slate-400 w-fit main"> 
        <div className="flex flex-col w-fit  p-2 "> 
          <h1 className="text-4xl bg-slate-400 p-3"> To-Do List</h1> 
          <div className="p-3"> 
            <input 
              type="text" 
              placeholder=" add task" 
              className="rounded-md p-1" 
              value={task} 
              onChange={(e) => setTask(e.target.value)} 
            /> 
            <button 
              className="text-white rounded-md ml-2 p-1 bg-slate-700" 
              onClick={addTask} 
            > 
              add 
            </button> 
          </div> 
          <div className=""> 
            <ul> 
              {tasks.map((taskk, index) => ( 
                <li key={index} className="flex text-2xl justify-between items-center  "> 
                  <input 
                    type="checkbox" 
                    name="" 
                    id="" 
                    onClick={() => { 
                      setThis(index); 
                    }} 
                  /> 
 
                  {line[index] ? ( 
                    <p style={textStyle}>{taskk}</p> 
                  ) : ( 
                    <p>{taskk}</p> 
                  )} 

                  <button className="mr-3 bg-green-400  rounded-md m-2 text-1xl" onClick={() => deleteTask(index)}>del</button>


                </li> 
              ))} 
            </ul> 
          </div> 
        </div> 
      </div> 
    </> 
  ); 
} 
 
export default App;