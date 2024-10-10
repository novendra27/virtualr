import { resourcesLinks, platformLinks, communityLinks, contactLinks } from "../constants"

const Footer = () => {
    return (
        <footer className="mt-20 border-t py-10 border-neutral-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Resources Links */}
                <div>
                    <h3 className="text-md font-semibold mb-4">
                        Resources
                    </h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    className="text-neutral-300 hover:text-white"
                                    href={link.href}
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Platform Links   className="mt-4 lg:mt-0"*/}
                <div>
                    <h3 className="text-md font-semibold mb-4">
                        Platform
                    </h3>
                    <ul className="space-y-2">
                        {platformLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    className="text-neutral-300 hover:text-white"
                                    href={link.href}
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Community Links */}
                <div>
                    <h3 className="text-md font-semibold mb-4">
                        Community
                    </h3>
                    <ul className="space-y-2">
                        {communityLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    className="text-neutral-300 hover:text-white"
                                    href={link.href}
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Conta Links */}
                <div>
                    <h3 className="text-md font-semibold mb-4">
                        Contact
                    </h3>
                    <ul className="space-y-2">
                        {contactLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    className="text-neutral-300 hover:text-white"
                                    href={link.href}
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer