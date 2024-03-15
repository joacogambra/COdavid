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
                <p className="message">Signup now and get full access to our app. </p>
                <input className="input" type="text" placeholder="name" required="" ref={name}/>
                <input className="input" type="number" placeholder="age" required="" ref={age}/>
                <input className="input" type="email" placeholder="mail" required="" ref={mail}/>
                <input className="input" type="text" placeholder="country" required="" ref={country}/>            
                <input className="input" type="password" placeholder="contraseña" required="" ref={contraseña}/> 
                <input type="submit" className="submit" value='Registrar' />        
                <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
            </form>
        </div>
    );
}