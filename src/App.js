import { useDispatch } from 'react-redux';
import './App.css';
import { ADDINPUT,DELETE } from './redux/action-type';
import {useState} from 'react'
import {useSelector} from 'react-redux'
function App() {
  
  const Todolist=()=>{
    const dispatch=useDispatch()
    const mytodo=useSelector(state=>state.todos)
    const handlDelete=(id)=>dispatch({
      type:DELETE,
      payload:id
    })
    return(
    <ul>
      {mytodo.map(mytodos=><li onClick={()=>handlDelete(mytodos.id)}>{mytodos.text}</li>)}
      </ul>
    )};


  const AddInput=()=>{
    const dispatch=useDispatch()
    const[newTodo,setNewTodo]=useState()
    const handleChange=(e)=>setNewTodo(e.target.value)
    const handleAdd=()=>dispatch
    ({type:ADDINPUT,
      payload:{
        text:newTodo,
        id:Math.random()}})

    return(
      <div className="body">
        <input type="text" value={newTodo} onChange={handleChange}/>
        <button onClick={handleAdd} >add your to do</button>
      </div>  
      )
  }

  return (
    <div className="App">
     <h1>Hello welcome to the to do list</h1> 
     <Todolist/>
    < AddInput/>
    </div>
  );
}

export default App;
