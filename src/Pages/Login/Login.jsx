import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Shared/hook/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { signIn, googleSignIn, githubSignIn, facebookSignIn } = useContext(AuthContext);
    const location = useLocation()
    const navigate  = useNavigate()

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    };

    const handleGithub = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleFacebook = () => {
        facebookSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })

            .catch(error=>{
                console.log(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Opps...!',
                    text: 'User & Password Wrong',
                })
            })
    }


    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div
            data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000"
            className="mx-auto border-4 rounded-xl shadow-2xl shadow-[#7c60ff] md:bg-[#7c60ff33] my-4 border-[#7c60ff] flex justify-center md:w-1/2 py-10 px-0 md:px-5"
        >
            <div
                data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000"
                className="relative flex flex-col rounded-xl bg-dark bg-clip-border text-white">
                <h4 className="block text-center text-3xl font-bold leading-snug tracking-normal text-white antialiased">
                    Log In
                </h4>
                <p className="mt-1 text-center block text-base font-normal leading-relaxed text-white antialiased">
                    Enter your Email And Password.
                </p>
                <form onSubmit={handleLogin} className="mt-8 mb-2 md:w-80 max-w-screen-lg md:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <div
                            data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000"
                            className="relative h-11 w-full min-w-[200px]">
                            <input
                                type="email"
                                name="email"
                                required
                                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border-t-transparent placeholder-shown:border-t-transparent-200 focus:border-2 focus:border-[#7c60ff] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "

                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#7c60ff] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#7c60ff] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>
                        <div
                            data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"
                            className="relative h-11 w-full min-w-[200px]">
                            <input
                                type="password"
                                name="password"
                                required
                                className="peer h-full w-full rounded-md border border-t-transparent border-blue-gray-200 bg-transparent px-3 py-3 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-transparent focus:border-2 focus:border-[#7c60ff] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "

                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#7c60ff] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#7c60ff] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>
                        <Link className="text-right">Forgot Password?</Link>
                    </div>

                    <button
                        data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"
                        className="mt-6 block w-full select-none rounded-lg bg-[#7c60ff] py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="submit"
                        data-ripple-light="true"
                    >
                        Log IN
                    </button>
                </form>
                <hr className="my-4" />
                <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">
                    <p className="flex items-center justify-center">
                        <p className="w-1/4 h-[3px] bg-slate-400"></p>
                        <span className="mx-2">Continue with</span>
                        <p className="w-1/4 h-[3px] bg-slate-400"></p>
                    </p>
                    <div className="flex justify-center items-center space-x-3 text-2xl my-2">
                        <button onClick={handleGoogle}><BsGoogle></BsGoogle></button>
                        <button onClick={handleGithub}><BsGithub></BsGithub></button>
                        <button onClick={handleFacebook}><BsFacebook></BsFacebook></button>
                    </div>
                </div>
                <p
                    data-aos="zoom-out" data-aos-delay="50" data-aos-duration="1000"
                    className="mt-4 block text-center text-base font-normal leading-relaxed text-white antialiased">
                    Don't have an account?
                    <Link
                        className="ml-2 font-medium text-blue-600 transition-colors hover:text-[#7c60ff]"
                        to='/register'
                    >
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;