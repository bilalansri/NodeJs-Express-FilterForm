import './App.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const {register, handleSubmit, formState:{errors}} = useForm()
  const [data, setData] = useState([])
  const [searchName, setSearchName] = useState('')

  const formHandler = async (user)=>{

    // setData([...data, user])

    try {

      await axios.post('/api/form', user)

    } catch (error) {

      alert('DataBase Not Available')
    }

    try {

     let users= await axios.get('/api/form', user)
      setData([...users.data])


    } catch (error) {
      console.log(error.message);
    }
  }

  return <div className="App">

<form className="col s4" onSubmit={handleSubmit(formHandler)}>
    <div className="row">

      <div className="input-field col s12">
        <input id="FirstName" type="text" className="validate" placeholder="First Name" {...register('name1', {required:true })}/>
        {errors.name1 && <div>Blank Field Not Applicable</div>}
      </div>

      <div className="input-field col s12">
        <input id="LastName" type="text" className="validate" placeholder="Last Name" {...register('name2', {required:true })}/>
        {errors.name2 && <div>Blank Field Not Applicable</div>}
      </div>

      <div className="input-field col s12">
        <input id="Email" type="email" className="validate" placeholder="Email" {...register('email', {required:true })}/>
        {errors.email && <div>Blank Field Not Applicable</div>}
      </div>

      <div className="input-field col s12">
        <input id="Phone" type="number" className="validate" placeholder="Phone" {...register('phone', {required:true })} />
        {errors.phone && <div>Blank Field Not Applicable</div>}
      </div>

      <div className="input-field col s12">
        <input id="Password" type="password" className="validate" placeholder="Password" {...register('password', {required:true})}/>
        {errors.password && <div>Blank Field Not Applicable</div>}
      </div>

      <div className="input-field col s12">
        <button type="submit" className="waves-effect waves-light btn">
          Submit
        </button>
      </div>
    </div>
  </form> 

  <input type='text' onChange={(e)=>setSearchName(e.target.value)} placeholder='Search By Name...'/>

  <table>
    <tbody>
      {
        data.filter((user)=>{
          if(searchName == ''){
            return user
          } else if(user.name1.toLowerCase().includes(searchName.toLowerCase()) || user.name2.toLowerCase().includes(searchName.toLowerCase())){
            return user
          }
        }).map((user, key)=>{
          return <tr key={key}>
            <td>{user.name1} {user.name2}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.password}</td>
          </tr>
        })
      }
    </tbody>
  </table>
      
    </div>
}

export default App;