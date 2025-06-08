import DownloadButton from "@/app/_components/downloadButton/downloadButton";


export default function Home(){
    return (
        <>
            <div className="flex h-[100vh] w-[100%] flex-col lg:flex-row items-center mt-10 sm:mt-0 sm:justify-center lg:justify-start lg:pl-[30px]">
                <div className="lg:w-[700px] bg-white lg:h-[95%] w-[200px] h-[200px] relative rounded-full lg:rounded-xl border-[3px] border-[#565656] lg:border-0" style={{overflow: 'hidden'}}>
                    <img className="object-cover h-[100%] w-[100%]"
                        src="./meTemp.jpeg"
                        loading="lazy"
                        alt="hero"
                    />
                </div>
                <div className=" lg:w-[800px] w-full px-10 flex flex-col items-center mt-10 lg: mt-0 lg:items-start lg:gap-7 gap-5 lg:pr-50 lg:ml-50">
                    <h1 className={` uppercase text-center lg:text-right lg:leading-15 font-[700] lg:text-[46px] text-[32px]`}>
                        <span className="text-cyan-600"><span className="lg:inline hidden">— </span>I'm Sacha McKenzie</span>
                        <br/>
                        Software Developer
                    </h1>
                    <p className={` leading-8 lg:text-[16px] text-[14px] lg:text-left text-center`}>I'm a United States based software developer with a knack for problem solving and a passion for programming. I enjoy delivering real value through my work.</p>
                    <div className="uppercase flex justify-center items-center border-1 border-cyan-600 h-[55px] w-[300px] rounded-full">
                        <DownloadButton
                            text= "Download CV"
                            file="./file.txt"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}