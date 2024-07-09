import { useEffect, useState } from "react";
import Blog from "./component/Blog";
import { Transition } from "@headlessui/react";
import "./App.css";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";
import { infoList } from "./data/data.js";
import { backgroundimg } from "./data/backgroundimage.js";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("right");
  const [initial, setIntial] = useState(true);
  const [position, setPosition] = useState({
    top: "0px",
    left: "0px",
    right: "0px",
  });
  const [currentBgImg, setCurrentBgImg] = useState(0);
  const [showBgImg, setShowBgImg] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntial(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // 生成随机位置
    const randomTop = `${Math.floor(Math.random() * 20 + 5)}vh`;
    const isLeft = currentBgImg % 2 === 0;
    const randomLeft = isLeft
      ? `${Math.floor(Math.random() * 15 + 5)}vw`
      : "auto";
    const randomRight = !isLeft
      ? `${Math.floor(Math.random() * 15 + 5)}vw`
      : "auto";

    setPosition({ top: randomTop, left: randomLeft, right: randomRight });
  }, [currentBgImg]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBgImg(false);
      setTimeout(() => {
        setCurrentBgImg((pre) => (pre + 1) % backgroundimg.length);
        setShowBgImg(true);
      }, 3000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setDirection("left");
    setCurrentSlide((prev) => (prev === 0 ? infoList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentSlide((prev) => (prev === infoList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex justify-center items-center flex-row bg-gradient-to-r from-cyan-300 to-blue-300 h-screen relative overflow-hidden">
      {/* <BsArrowLeftCircleFill
        size={60}
        onClick={handlePrevious}
        className="absolute left-10 z-10 cursor-pointer"
      /> */}
      {backgroundimg.map((img, index) => (
        <Transition
          key={index}
          as={"div"}
          appear={true}
          show={showBgImg && currentBgImg === index}
          enter="transition duration-[5s] ease-in-out"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition duration-[3s] ease-in-out"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-150"
          className="absolute"
          style={{
            top: position.top,
            left: position.left,
            right: position.right,
            width: "300px",
            height: "300px",
            border: "3rem", 
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
      ))}

      <Transition
        as={"div"}
        appear={true}
        show={true}
        enter=" transition duration-1000"
        enterFrom=" opacity-0"
        enterTo=" opacity-100"
        className=" w-80 h-20 absolute top-5 flex justify-center"
      >
        <h className="h-20 text-4xl font-playpen absolute top-0">Travel Diary</h>
      </Transition>
      <Transition
        as={"div"}
        appear={true}
        show={true}
        enter=" transition duration-1000"
        enterFrom=" opacity-0"
        enterTo=" opacity-100"
      >
        <ArrowLeftCircleIcon
          className="absolute left-24 bottom-56 z-20 cursor-pointer size-16"
          onClick={handlePrevious}
        />
      </Transition>
      {infoList.map((listItem, index) => (
        <Transition
          as={"div"}
          appear={true}
          key={index}
          show={index === currentSlide}
          enter={" transition duration-500"}
          enterFrom={
            initial && index === 0
              ? "opacity-0"
              : direction === "right"
              ? "opacity-0 translate-x-full"
              : "opacity-0 -translate-x-full"
          }
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-in-out duration-[500ms]"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo={
            direction === "right" ? "-translate-x-full" : "translate-x-full"
          }
          className="absolute w-full h-full"
        >
          <Blog
            destination={listItem.destination}
            img={listItem.img}
            content={listItem.content}
            date={listItem.date}
          />
        </Transition>
      ))}
      {/* </div> */}
      <Transition
        as={"div"}
        appear={true}
        show={true}
        enter=" transition duration-1000"
        enterFrom=" opacity-0"
        enterTo=" opacity-100"
      >
        <ArrowRightCircleIcon
          className="absolute right-24 bottom-56 cursor-pointer size-16"
          onClick={handleNext}
        />
      </Transition>
      {/* <BsArrowRightCircleFill
        size={60}
        
        className=""
      /> */}
      <Transition
        as={"span"}
        appear={true}
        show={true}
        enter=" transition duration-1000"
        enterFrom=" opacity-0"
        enterTo=" opacity-100"
        className=" absolute bottom-5 flex flex-row gap-2"
      >
        {infoList && infoList.length
          ? infoList.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? " bg-white w-5 h-5 rounded-xl"
                    : "bg-black w-5 h-5 rounded-xl"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </Transition>
    </div>
  );
}

export default App;
