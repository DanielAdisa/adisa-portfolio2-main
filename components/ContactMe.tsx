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
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact Me
        </h3>
        <div className=" flex flex-col space-y-10 cursor-not-allowed">
            <h4 className="text-4xl font-semibold text-center">I{"'"}m H.I.M, I deliver. <span className="underline decoration-[#25D366]/50"> Lets Talk.</span> </h4>

            <div className=" space-y-5">
                <div className=" flex items-center space-x-5 justify-center">
                    <PhoneArrowUpRightIcon className=" text-[#25D366] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">+2348037956920</p>
                </div>

                <div className=" flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className=" text-[#25D366] h-7 w-7 animate-ping"/>
                    <p className="text-2xl">adisadaniel4@gmail.com</p>
                </div>

                <div className=" flex items-center space-x-5 justify-center">
                    <MapPinIcon className=" text-[#25D366] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">Abuja, Nigeria</p>
                </div>

                
            </div>

            <form className="flex flex-col space-y-2 w-fit mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className=" flex space-x-2">
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

