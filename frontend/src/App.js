import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [editMode, setEditMode] = useState(false);
  const [list, setList] = useState([]);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [userId, setUserId] = useState('');

  const showTodos = async () => {
    try {
      const {data} = await axios.get('/api/show/todos');
      console.log(data);
      setList(data);
    } catch (error) {
      console.log(error);
    }
  }

  const addtodo = async (e) => {
    e.preventDefault();
    try{
      const add = await axios.post('/api/create/list', {firstname, lastname});
      console.log(firstname, lastname);
      if(add.status === 200){
        setFirstname('');
        setLastname('');
        showTodos();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const deleteTodo = async (id) => {
    try{
      const todoDelete = await axios.delete(`/api/delete/todo/${id}`);
      if (todoDelete.status === 200){
        showTodos();
      }
    } catch (error){
      console.log(error);
    }
  }

  const showSingleTodo = async (id) => {
    setEditMode(true);
    try{
      const {data} = await axios.get(`/api/todo/${id}`);
      setFirstname(data.firstname);
      setLastname(data.lastname);
      setUserId(data.id);
    } catch (error){
      console.log(error);
    }
  }

  const editTodo = async (e) => {
    e.preventDefault();

    try{
      const edit = await axios.put(`/api/update/todo/${userId}`, {firstname, lastname});
      console.log(edit)
      if(edit.status === 200){
        setEditMode(false);
        setFirstname('');
        setLastname('');
        showTodos();
      }
    } catch (error){
      console.log(error);
    }
  }

  useEffect(() => {
    showTodos();
  }, []);

  return(
    <>
      <Header/>
      <div className="container">
        <div className="form" style={{ paddingBottom: "50px", paddingTop: "50px"}}>
          <form onSubmit={editMode ? editTodo : addtodo}>
            <div className="form-wrapper" style={{display: "flex", justifyContent: "space-between"}}>
              <div style={{ flex: 1, marginRight: "10px"}}>
                <input onChange={(e)=>setFirstname(e.target.value)} value={firstname} className="form-control" type="text" placeholder="first name" name="firstname"/>
              </div>
              <div style={{flex: 1}}>
                <input onChange={(e)=>setLastname(e.target.value)} value={lastname} className="form-control" type="text" placeholder="last name" name="lastname"/>
              </div>

              {
                editMode ?
                <button type='submit' style={{width: "200px", marginLeft: "10px"}} className='btn btn-primary'>Edit</button>
                :
                <button type='submit' style={{width: "200px", marginLeft: "10px"}} className='btn btn-success'>+ Add</button>
              }  

            </div>
          </form>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              list && list.map(d => {
                return (
                  <tr key={d.id}>
                    <th scope="row">{d.id}</th>
                    <td>{d.firstname}</td>
                    <td>{d.lastname}</td>
                    <td>
                      <FontAwesomeIcon icon={faPenToSquare} style={{ color: "green", cursor: "pointer", marginRight: "5px"}} onClick={() => showSingleTodo(d.id)} />
                      <FontAwesomeIcon icon={faTrash} style={{ color: "red", cursor: "pointer"}} onClick={() => deleteTodo(d.id)} />  
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>

      </div>
    </>
  )
}

export default App