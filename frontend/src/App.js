import { useState } from 'react';
import './App.css';
import Header from './component/Header';

const App = () => {
  const [editMode, setEditMode] = useState(false);
  return(
    <>
      <Header/>
      <div className="container">
        <div className="form" style={{ paddingBottom: "50px", paddingTop: "50px"}}>
          <form>
            <div className="form-wrapper" style={{display: "flex", justifyContent: "space-between"}}>
              <div style={{ flex: 1, marginRight: "10px"}}>
                <input className="form-control" type="text" placeholder="first name" name="firstName"/>
              </div>
              <div style={{flex: 1}}>
                <input className="form-control" type="text" placeholder="last name" name="lastName"/>
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
            <tr>
              <th scope="row">1</th>
              <td>Ahmad</td>
              <td>Hamsa</td>
              <td>
                <i>a</i>
                <i>b</i>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </>
  )
}

export default App