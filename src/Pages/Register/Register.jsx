import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';


const Register = () => {
    const [registerError, setError] = useState('');
    const [userCreate, setUserCreate] = useState('');
    const [showPass, setShowPass] = useState(false);
    const { creatUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const accepted = form.get('terms');
        setError('');
        setUserCreate('');
        console.log(name, email, password, accepted);


        if (password.length < 6 || password === "") {
            setError('Password must contain 6 or more characters');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError('Your password must contain one Capital letter');
            return;
        } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            setError('Your password must contain one special character');
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Email is not valid");
            return;
        }
        else if (!accepted) {
            setError('Please accept our all the terms and conditions first');
            return;
        }

        creatUser(email, password)
            .then(result => {
                e.target.reset();
                setUserCreate('user created')
                navigate('/');
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

    }

    return (
        <div className="">
            <div className="  flex flex-col justify-center items-center my-10 relative ">

                <div className="flex flex-col justify-start items-center rounded-xl bg-gray-900/70 w-full h-full z-10 overflow-hidden">

                    <div className="my-10 w-[92%] md:w-[70%] lg:w-[50%] h-[70%] top-0 z-40">
                        <h2 className="text-center text-white text-4xl mb-8 font-bold">Please Register</h2>
                        <form onSubmit={handleSubmit} className="
                    flex flex-col justify-center items-center border-2 border-zinc-400 px-3 py-9 md:px-24 md:pt-14 bg-gray-300/40 rounded-xl shadow-xl ">




                            {
                                registerError && <p className="text-red-700 text-md font-bold mt-2">{registerError}</p>
                            }
                            {
                                userCreate &&
                                <p className="text-green-700 text-md font-bold mt-2">
                                        {Swal.fire('Registered Successfully!!!')}

                                </p>
                            }
                            <input
                                required
                                type="text"
                                name='name'
                                placeholder="Name"
                                className=" border-2 border-gray-600 py-2 px-2 
                        md:px-8 rounded-lg "
                            /><br />


                            <input
                                required
                                type="text"
                                name="picture"
                                placeholder="Picture url"
                                className=" border-2 border-gray-600 py-2 
                        px-2 md:px-8 rounded-lg "
                            /><br />

                            <input
                                required
                                type="email"
                                name='email'
                                placeholder="email"
                                className=" border-2 border-gray-600 py-2 
                             px-2 
                        md:px-8  rounded-lg "
                            /><br />

                            <div className="flex relative items-center">
                                <input required
                                    type={showPass ? 'text' : 'password'}
                                    name='password'
                                    className="border-2 border-gray-600 
                            py-2 px-2 
                        md:px-8 rounded-lg "
                                />
                                <br />
                                <span
                                    className="absolute right-[5%]" onClick={() => setShowPass(!showPass)}>
                                    {
                                        showPass ? <AiFillEye /> : <AiFillEyeInvisible></AiFillEyeInvisible>
                                    }
                                </span>

                            </div>
                            <div className="my-2">

                                <input
                                    required
                                    type="checkbox"
                                    name="terms"
                                    id="terms"
                                    className="mr-2"
                                />

                                <label className="text-blue-600 font-bold "
                                    htmlFor="terms">
                                    Check our <a href="http://" target="_blank" rel="noopener noreferrer">terms and conditions</a>
                                    please
                                </label>
                            </div>

                            <button className="text-white font-bold text-lg btn btn-success mb-3">
                                <input
                                    required
                                    type="submit"
                                    value='Register'
                                    className=" py-2 
                            px-6 rounded-lg "
                                />
                            </button>
                            <br />

                            <p className="text-white mx-2 text-center  font-bold ">
                                Already have an account? Please go to the <br /> <Link className="underline font-bold text-blue-800" to='/login'> Login Page
                                </Link>
                            </p>


                        </form>
                    </div>
                   

                </div>
                <img src="https://i.ibb.co/FYDxb1L/pexels-mateusz-sa-aciak-4275885.jpg" alt="" className="rounded-xl w-full h-full absolute object-cover mx-auto overflow-hidden" />
                









            </div>
        </div>
        

        
    );
};

export default Register;