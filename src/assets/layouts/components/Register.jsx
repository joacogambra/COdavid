import React from "react";
import './styles/register.css'
import axios from "axios";
import { useRef } from 'react'

export default function Register() {
React;
    let form = useRef()
    let mail = useRef()
    let name = useRef()
    let age = useRef()
    let country = useRef()
    let contraseña = useRef()

    async function newUser(event) {
        event.preventDefault()

        let registerData = {
            mail: mail.current.value,
            name: name.current.value,
            age: age.current.value,
            country: country.current.value,
            contraseña:contraseña.current.value
        }

        try {
            let res = await axios.post(`http://localhost:3000/user/signup`, registerData)
            if (res.data.success) {
                alert('usuario creado')
                form.current.reset()
            } else {
                alert('usuario no creado')
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="cont-form">
            <form className="form" onSubmit={newUser} ref={form} action="#">
                <p className="title">Register</p>
                <p className="message">Regístrese y obtenga acceso completo </p>

                <input type="text" autoComplete="off" name="name" className="new-input" placeholder="Name"required="" ref={name}/>
                <input type="number" autoComplete="off" name="age" className="new-input" placeholder="Age" required="" ref={age}/>
                {/* <input type="date" autoComplete="off" name="age" className="new-input" placeholder="Age" required="" ref={age}/> */}
                <input type="email" autoComplete="off" name="mail" className="new-input" placeholder="Email" required=""ref={mail}/>
                <input type="text" autoComplete="off" name="country" className="new-input" placeholder="Country" required=""ref={country}/>
                <input type="password" autoComplete="off" name="contraseña" className="new-input" placeholder="Password" required=""ref={contraseña}/>

                <input type="submit" className="submit" value='Registrar' />  

                <p className="signin">Ya tienes una cuenta? <a href="#">Ingresar</a> </p>
            </form>
        </div>
    );
}