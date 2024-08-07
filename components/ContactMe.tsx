import {PhoneArrowUpRightIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useForm, SubmitHandler} from "react-hook-form";

type Inputs = {
    name: string;
    email:string;
    subject:string;
    message:string;
};

type Props = {};
function ContactMe({}: Props) {
    const {
        register,
        handleSubmit
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:adisadaniel4@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`;
    };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left  
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center scroll-smooth">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
            Contact Me
        </h3>
        <div className=" flex flex-col space-y-10 mt-20 md:mt-0">
            <h4 className="text-4xl font-semibold text-center">We deliver. <span className="underline decoration-[#25D366]/50"> Lets Talk.</span> </h4>

            <div className=" space-y-5">
                <div className=" flex items-center space-x-5 justify-center">
                    <Link href={"tel:+2348037956920"}>
                    <PhoneArrowUpRightIcon className=" text-[#25D366] h-7 w-7 animate-pulse"/>
                    </Link>
                    <Link href={"tel:+2349166423642"}>
                    <p className="text-2xl">Call Me</p>
                    </Link>
                </div>

                <div className=" flex items-center space-x-5 justify-center">
                    <Link href={"mailto:adisadaniel4@gmail.com"}>
                    <EnvelopeIcon className=" text-[#25D366] h-7 w-7 animate-ping"/>
                    </Link>
                    <Link href={"mailto:adisadaniel4@gmail.com"}>
                    <p className="text-2xl">adisadaniel4@gmail.com</p>
                    </Link>
                </div>

                <div className=" flex items-center space-x-5 justify-center">
                    <MapPinIcon className=" text-[#25D366] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">Nigeria</p>
                </div>

                
            </div>

            <form className="flex flex-col space-y-2 w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className=" flex md:flex-row flex-col md:space-y-0 space-y-2 md:space-x-2 ">
                    <input {...register('name')} className="contactInput" type="text" placeholder="Name" />
                    <input {...register('email')} className="contactInput" type="email" placeholder="Email" />
                </div>  
                <input {...register('subject')} className="contactInput" type="text" placeholder="Subject" />

                <textarea {...register('message')} className="contactInput" placeholder="Message"/>
                <button className="bg-[#25D366]/90 py-5 px-10 rounded-md text-white font-bold text-lg" type="submit"><span className=" animate-ping">Submit</span></button>

            </form>

        </div>
    </div>
  )
}
export default ContactMe

