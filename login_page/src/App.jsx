import './App.css'
import İnput from "./components/input/İnput"
import Button from "./components/Button/Button"
import Form from "./components/Form/Form"
import { useState } from 'react'

function App() {

  const [user, setUser] = useState({ name: "", password: "" });

  const handleChange = (e) => {

    if (e.target.type === "text") {
      setUser({ ...user, name: e.target.value });
      console.log(user);
    }

    else {
      setUser({ ...user, password: e.target.value });
      console.log(user);
    }

  };

  const handleClick = () => {

    if (user.name === "") {
      alert("İstifadəçi adı boş ola bilməz");
    }

    else if (user.password === "") {
      alert("Parol boş ola bilməz");
    }

    else {
      alert("Səhifəmizə xoş gəlmisiniz : " + user.name + " " + " Parolunuz : " + user.password);
    }

  };


  return (

    <div className="App">
      <h2>Qeydiyyat Formu</h2>

      <Form>
        <İnput type={"text"} value={user.name} placeHolder={"İstifadəçi adını daxil edin"} onChange={handleChange} />
        <İnput type={"password"} value={user.password} placeHolder={"Parolu daxil edin"} onChange={handleChange} />
        <Button onClick={handleClick} />
      </Form>
    </div>

  )

}

export default App