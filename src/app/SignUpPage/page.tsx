'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import '../globals.css'
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SignUpPage() {

    const [fname, changeFname] = useState('');
    const [lname, changeLname] = useState('');
    const [uname, changeUname] = useState('');
    const [pass, changePass] = useState('');
    const [email, changeEmail] = useState('');
    const [lowerText, changeLowerText] = useState('');

    const handleUserChange = (event) => {
        changeUname(event.currentTarget.value);
    }
    const handleFChange = (event) => {
        changeFname(event.currentTarget.value);
    }
    const handleLChange = (event) => {
        changeLname(event.currentTarget.value);
    }
    const handleEmailChange = (event) => {
        changeEmail(event.currentTarget.value);
    }
    const handlePassChange = (event) => {
        changePass(event.currentTarget.value);
    }

    const handleSubmit = (event) => {
        const text = "User " + uname + " with password " + pass;
        changeLowerText(text);
    }

    return (
        <div className ="w-full h-screen py-12 bg-rose-100">
            <h1 className='mt-2 text-blue-800 text-6xl leading-8 font-bold pb-20 text-left pl-52'>
                Sign up today and join the community.
            </h1>   
            <div className='text-left pl-52'>
                <form>
                    <label className='mt-2 text-blue-800 text-2xl leading-8 font-semibold sm:text-1xl pb-2 pr-2'>
                        First Name:
                    </label>
                    <input type="text" onChange={handleFChange} value={fname} className='rounded text-1xl py-1 px-1'  />
                </form> 
                <form>
                    <label className='mt-2 text-blue-800 text-2xl leading-8 font-semibold sm:text-1xl pb-2 pr-2'>
                        Last Name:
                    </label>
                    <input type="text" onChange={handleLChange} value={lname} className='rounded text-1xl py-1 px-1'  />
                </form>
                <form>
                    <label className='mt-2 text-blue-800 text-2xl leading-8 font-semibold sm:text-1xl pb-2 pr-16'>
                        Email:
                    </label>
                    <input type="email" onChange={handleEmailChange} value={email} className='rounded text-1xl py-1 px-1'  />
                </form>
                <form>
                    <label className='mt-2 text-blue-800 text-2xl leading-8 font-semibold sm:text-1xl pb-2 pr-3'>
                        Username:
                    </label>
                    <input type="text" onChange={handleUserChange} value={uname} className='rounded text-1xl py-1 px-1'  />
                </form>
                <form>
                    <label className='mt-2 text-blue-800 text-2xl leading-8 font-semibold sm:text-1xl pb-5 pr-4'>
                        Password:
                    </label>
                    <input type="password" onChange={handlePassChange} value={pass} className='rounded text-1xl py-1 px-1'  />
                </form>
                <button type="submit" onClick={handleSubmit}
                    className='bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded'>
                    Submit
                </button>
                <p className="font-semibold text-blue-800 text-4xl">
                    {lowerText}
                </p>
            </div>
        </div>
    )
}