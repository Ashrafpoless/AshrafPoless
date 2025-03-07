import { assets } from '@/assets/assets'
import Image from 'next/image'
import  { useState } from 'react'
import { motion, spring } from "motion/react"


const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", '446cc41d-c9d4-43af-9d16-9739a2b73aa8');
      console.log(process.env.FORM_ACCESS_KEY)
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id="contact" className='w-full px-[12%] py-10 scroll-m-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%-auto] dark:bg-none'>
       <motion.h4 className="text-center mb-2 text-lg font-Ovo"
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.3}}
       >Connect with me</motion.h4>
       <motion.h2 className="text-center  text-5xl font-Ovo"
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.5}}
       >Get in touch</motion.h2>
       <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
         initial={{ opacity: 0}}
         whileInView={{ opacity: 1}}
         transition={{duration: 0.5, delay: 0.7}}
       >
        I'd love to hear from you, If you have any questions, comments, or feedback, please use the form below.
       </motion.p>
  
        <motion.form onSubmit={onSubmit} className='max-w-2xl mx-auto'
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              transition={{duration: 0.5, delay: 0.9}}
        >
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                
                <motion.input 
                  initial={{x: -50, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{duration: 0.6, delay: 1.1}}
                type="text" name='name' placeholder='Enter Your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'/>
                <motion.input
                initial={{x: 50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 1.1}}
                type="email" name='email' placeholder='Enter Your email' required  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-darkHover/30 dark:border-white/90'/>

            </div>
            <motion.textarea
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 1.3}}
            name="message"  rows='6' placeholder='Enter Your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6  dark:bg-darkHover/30 dark:border-white/90'></motion.textarea>
            <motion.button
              whileHover={{scale: 1.05}}
              transition={{duration: 0.3}}
            type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/70 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/> </motion.button>
            <p className='mt-4'>{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default Contact