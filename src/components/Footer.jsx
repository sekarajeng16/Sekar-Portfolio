import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-primary text-white w-full">
            <div className="max-w-screen-xl mx-auto px-5 py-8 flex flex-col md:flex-row justify-between items-start gap-8">

                <div className="text-sm ">
                    <p className="!text-white">© 2025 Sekar Ajeng. All rights reserved.</p>
                </div>


                <div>
                <h3 className="text-white font-semibold text-xl mb-2">Navigation</h3>
                <ul className="space-y-1">
                    <li><NavLink to="/" className="text-white font-medium hover:underline">Home</NavLink></li>
                    <li><NavLink to="/projects" className="text-white font-medium hover:underline">Projects</NavLink></li>
                    <li><NavLink to="/about" className="text-white font-medium hover:underline">About Me</NavLink></li>
                </ul>
                </div>

                <div>
                <h3 className="text-white font-semibold text-xl mb-2">Social Media</h3>
                <ul className="space-y-3 text-sm font-normal text-white">
                    <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect width={18.5} height={15.5} x={2.75} y={4.25} rx={3}></rect><path d="m2.75 8l8.415 3.866a2 2 0 0 0 1.67 0L21.25 8"></path></svg>
                    <a href="mailto:sekar.ajeng16@gmail.com" className="underline hover:text-gray-200">sekar.ajeng16@gmail.com</a>
                    </li>
                    <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="currentColor"><path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436c.55.096.756-.233.756-.522c0-.262-.013-1.128-.013-2.049c-2.764.509-3.479-.674-3.699-1.292c-.124-.317-.66-1.293-1.127-1.554c-.385-.207-.936-.715-.014-.729c.866-.014 1.485.797 1.691 1.128c.99 1.663 2.571 1.196 3.204.907c.096-.715.385-1.196.701-1.471c-2.448-.275-5.005-1.224-5.005-5.432c0-1.196.426-2.186 1.128-2.956c-.111-.275-.496-1.402.11-2.915c0 0 .921-.288 3.024 1.128a10.2 10.2 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371c2.104-1.43 3.025-1.128 3.025-1.128c.605 1.513.221 2.64.111 2.915c.701.77 1.127 1.747 1.127 2.956c0 4.222-2.571 5.157-5.019 5.432c.399.344.743 1.004.743 2.035c0 1.471-.014 2.654-.014 3.025c0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11"/></svg>
                    <a href="https://github.com/sekarajeng16" className="hover:underline">github.com/sekarajeng16</a>
                    </li>
                    <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    <a href="https://linkedin.com/in/sekarajeng643" className="hover:underline">Sekar Ajeng Suprobo Mukti</a>
                    </li>
                </ul>
                </div>
            </div>
        </footer>
    )
}

export default  Footer