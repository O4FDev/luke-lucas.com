import Navbar from '../Components/Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar />
            {/* Lets connect */}
            <div className="flex flex-col md:flex-row items-center md:justify-center h-[80vh] p-12">
                <div className="flex flex-col gap-4 px-12 font-bold text-left text-4xl lg:text-4xl lg:gap-8">
                    <div>
                        <h1>
                            Let's connect
                        </h1>
                        <h3
                            className='text-sm py-2'
                        >
                        © 2022 Luke Lucas
                        </h3>
                    </div>
                </div>
                <div className="flex px-12 flex-row text-xl">
                    <div className="flex flex-col gap-4 font-bold text-left">
                        <a
                            className="text-orange-500 underline"
                            href="mailto:luke.lucas@ou.ac.uk"
                        >
                            luke.lucas@ou.ac.uk
                        </a>
                        <a
                            className=""
                            href="tel:+447555706509"
                        >
                            +44 7555 706509
                        </a>
                        <a
                            className=""
                            href="https://www.linkedin.com/in/luke-lucas/"
                        >
                            LinkedIn
                        </a>
                        <a
                            className=""
                            href="https://www.github.com/O4FDev"
                        >
                            GitHub
                        </a>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;