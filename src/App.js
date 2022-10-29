
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    fetch("http://localhost:5000/users")
    .then(res=>res.json())
    .then(data => setUsers(data))
  },[])

  const handleSubmit = event =>{

    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = {name,email}
    console.log(user);
    event.target.reset();
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name='email' placeholder='email' />
        <br />
        <input type="text" name='name' placeholder='name' />
        <br />
        <button type='submit'>ADD User</button>
      </form>
      {
        users.map(user => <p key={user.id}>{user.name} {user.email}</p>)
      }
    </div>
  );
}

export default App;
