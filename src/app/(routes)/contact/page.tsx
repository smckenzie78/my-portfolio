import FillButton from "@/app/_components/fillButton/fillButton";



export default function Contact(){
    return (
        <>
            <div className="flex flex-col items-center mt-10 w-full">
                <h1 className={`uppercase text-center leading-15 font-[900] lg:text-[52px] text-[40px] z-1`}>Contact<span className="text-cyan-600"> Me</span></h1>
                <h1 className={`uppercase text-center leading-15 font-[900] text-[#303030] lg:text-[80px] text-[60px] absolute z-0`}>Contact</h1>
            </div>
            <div className="flex lg:h-[80vh] flex-col lg:flex-row w-full justify-center lg:mt-20 mt-10 gap-10 lg:gap-20 lg:px-30 px-5">
                <div className="flex flex-col lg:w-[350px] w-full gap-5">
                    <h1 className={`uppercase text-2xl font-[600] lg:text-left text-center`}>Be not afraid</h1>
                    <p>Looking for a partner who can bring fresh ideas to your projects? I'm the developer you need! I'm always excited to hear about new projects and explore how I can contribute to your success. Don't hesitate to reach out to me and let's collaborate to make your visions a reality. Contact me today and let's get started!</p>
                </div>
                <form action="https://formsubmit.co/42c9d218a7a4af3310c80e800d6673bd" method="POST">
                    <div className="flex flex-col xl:w-[700px] lg:w-[500px] w-full gap-3 ">
                        <div className="bg-[#303030] rounded-xl lg:w-[50%] h-[50px] text-[#a8a8a8] flex flex-col">
                            <input type="email" name="email" placeholder="YOUR EMAIL" className={` h-[100%] rounded-xl px-7 font-[200] outline-[0px] focus:outline-[1px] focus:outline-cyan-600`}></input>
                        </div>
                        <div className="bg-[#303030] rounded-xl w-[100%] h-[50px] text-[#a8a8a8] flex flex-col">
                            <input type="text" name="_subject" placeholder="YOUR SUBJECT" className={` h-[100%] rounded-xl px-7 font-[200] outline-[0px] focus:outline-[1px] focus:outline-cyan-600`}></input>
                        </div>
                        <div className=" rounded-xl w-[100%] h-[300px] text-[#a8a8a8] flex flex-col">
                            <textarea name="message" placeholder="YOUR MESSAGE" className={` bg-[#303030] h-[100%] rounded-lg px-7 py-5 font-[200] outline-[0px] focus:outline-[1px] focus:outline-cyan-600 resize-none`}></textarea>
                            <div className="border-1 border-cyan-600 h-[55px] lg:w-[45%] rounded-full mt-5">
                                <FillButton
                                text="Send Message"
                                function="email"
                                />
                            </div> 
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}