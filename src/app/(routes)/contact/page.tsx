import Navbar from "@/app/_components/navbar/navbar";
import { poppins } from "@/app/layout";
import { opensans } from "@/app/layout";


export default function Contact(){
    return (
        <main className="h-screen w-full flex gap-40 items-center mx-10" >
            <div id="navbar" className="fixed top-0 right-[5%]">
                <Navbar />
            </div>
        </main>
    );
}