import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full bg-dark p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-dark text-center md:justify-between">
                <img src="/musiclogo.svg" alt="logo-ct" className="w-52" />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <NavLink
                            to='/about'
                            className="block text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-[#7c60ff] focus:text-[#7c60ff]"
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/about'
                            className="block text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-[#7c60ff] focus:text-[#7c60ff]"
                        >
                            License
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/gallery'
                            className="block text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-[#7c60ff] focus:text-[#7c60ff]"
                        >
                            Contribute
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/contact'
                            className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-[#7c60ff] focus:text-[#7c60ff]"
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-50" />
            <p className="block text-center text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                &copy; 2023 Md Najatul islam | All Right Reserved
            </p>
        </footer>
    );
};

export default Footer;