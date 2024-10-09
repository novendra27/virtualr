import { Menu, X } from "lucide-react"
import { useState } from "react"
import logo from "../assets/logo.png"
import { navItems } from "../constants"

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/800">
            <div className="container px-4 mx-auto relative text-base">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center flex-shrink0">
                        <img className="h-12 w-12 mr-2" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>
                    {/* Links */}
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    {/* Auth Button */}
                    <div className="hidden lg:flex justify-center space-x-12 items center">
                        <ButtonAuth href="#" label="Sign In" variant="signIn" />
                        <ButtonAuth href="#" label="Create an Account" variant="createAnAccount" />
                    </div>
                    {/* Mobile Drawer */}
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {/* Mobile Drawer Content */}
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-8 flex flex-col justify-center items-start lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6 pt-4">
                            <ButtonAuth href="#" label="Sign In" variant="signIn" />
                            <ButtonAuth href="#" label="Create an Account" variant="createAnAccount" />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

function ButtonAuth({ href, label, variant }) {
    const baseStyle = "py-2 px-3 rounded-md";
    const variantStyle = variant === "signIn"
        ? "border"
        : "bg-gradient-to-r from-orange-500 to-orange-800";

    return (
        <a href={href} className={`${baseStyle} ${variantStyle}`}>
            {label}
        </a>
    );
}

export default Navbar