'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import '../globals.css'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { checkSignIn, createUser } from '../../../services/UserService'
import Link from 'next/link';


function SignInPage() {

    const [id, changeId] = useState('0');
    const [name, changeName] = useState('');
    const [uname, changeUname] = useState('');
    const [pass, changePass] = useState('');
    const [email, changeEmail] = useState('');
    const [lowerText, changeLowerText] = useState('');

    const handleEmailChange = (event) => {
        changeEmail(event.currentTarget.value);
    }
    const handlePassChange = (event) => {
        changePass(event.currentTarget.value);
    }

    const handleSubmit = (event) => {

        checkSignIn(email, pass).then(users => {

            if (users.length == 0) {
                changeLowerText(
                    <Link href='/SignUpPage'>
                        Oops... Seems like you don't have an account yet. Sign up here<span aria-hidden="true">&rarr;</span>
                    </Link>
                    );
            }
            for (let user of users) {
                const realPass = user.password_hash;
                const name = user.name;
                if (pass !== realPass) {
                    changeLowerText(
                        <> Oops... You've entered the wrong password. Please try again! </>
                        );
                } else {
                    changeLowerText(
                        <> Sign in successful. Welcome back {name}! </>
                        );
                }
            }
        })
    }

            // for (let user of users) {
            //     realUname = user.username;
            //     realPass = user.password;
                
            // }

        // createUser(id, email, uname, pass, name).then(response => {
        //     changeId(id + 1);
        //     console.log(response);
        // })

    return (
        <div className ="w-full h-screen">
            <h1 className='mt-2 text-blue-800 text-6xl leading-24 font-bold pb-20 text-left px-52 pr-80'>
                Welcome back to your favourite e-commerce platform!
            </h1>   
            <h1 className='mt-2 text-blue-800 text-5xl leading-8 font-bold pb-10 text-left pl-52'>
                Sign In here.
            </h1>   
            <div className='text-left pl-52'>
                <form>
                    <label className='mt-2 text-blue-800 text-2xl leading-8 font-semibold sm:text-1xl pb-2 pr-16'>
                        Email:
                    </label>
                    <input type="email" onChange={handleEmailChange} value={email} className='rounded text-1xl py-1 px-1'  />
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
                <Link href='/SignUpPage'>
                    <h1 className='mt-2 text-blue-800 text-1xl font-semibold text-left py-6 underline'>
                    Don't have an account yet? Sign up now!
                    </h1>
                </Link>
                <h1 className="font-semibold text-blue-800 text-3xl">
                    {lowerText} 
                </h1>
            </div>
        </div>
    )
}

export default SignInPage;
