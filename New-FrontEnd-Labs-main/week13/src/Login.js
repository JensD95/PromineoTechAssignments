import React from 'react';
import { Link } from 'react-router-dom';
import validation from './LoginValidation';

function Login() {
    const [values, setValues] = React.useState({
        email: '',
        password: '',
    });

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const [errors, setErrors] = React.useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
           <div className='bg-white p-3 rounded w-25'>
           <h2 className='border text-center'>Log In</h2>
            <form action=''>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                    <span>{errors.email && <span className='text-danger'>{errors.email}</span>}</span>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter Password' name='password'
                    onChange={handleInput} className='form-control rounded-0'/>
                    <span>{errors.password && <span className='text-danger'>{errors.password}</span>}</span>
                </div>
                <button className='btn btn-success w-100'><strong>Login</strong></button>
                <Link to ='/signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
            </form>
           </div>
        </div>
    )
}

export default Login