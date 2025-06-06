"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Bloggie",
    desc: "Bloggie App is a dynamic platform where users can read, share, and interact with blogs on various topics. Whether it's technology, lifestyle, or creative writing, Bloggie provides an engaging space for readers and writers alike. Users can sign up, create their own blogs, and connect with others through like and share.",
    img: "/Bloggie.png",
    link: "https://group1-frontend-six.vercel.app",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Ex Tracker",
    desc: "Expense Tracker is a smart and intuitive app designed to help you manage your finances effortlessly. Track your income and expenses, set budgets, and gain insights into your spending habits—all in one place. Stay on top of your finances with real-time analytics and easy-to-use features, ensuring better financial decisions and savings.",
    img: "/expensestracker.png",
    link: "https://expensestracker-xi.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Movies API",
    desc: "A dynamic and responsive web application for exploring and discovering movies and TV shows using The Movie Database (TMDb) API. Users can search, view some details, and manage their favorite movies and TV shows seamlessly..",
    img: "/movie.png",
    link: "https://movies-one-tawny.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Gemini Ai",
    desc: "Gemini AI-Powered is an innovative web application that leverages Google's Gemini API to deliver real-time, intelligent solutions across a range of domains — from content generation and data analysis to customer support and creative ideas.",
    img: "/Gemini-clone.png",
    link: "https://gemini-clone-seven-iota.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-3 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col  gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[250px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} target="_blank" className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          
          
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px] "
              >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                  />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                  Full-stack Developer and UI Designer
                </textPath>
              </text>
            </motion.svg>
          
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
          >
            Hire Me
          </Link>
          
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;