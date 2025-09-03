import { useState } from "react";
import ReactCompareImage from "react-compare-image";
import { slides } from "../data/dataSlide";

export const CompareImage = () => {
    const [currentIndex, setСurrentIndex] = useState(0);
    const handleImageChange = (ind) => {
        setСurrentIndex(ind);
    };
    return (
        <div className="flex flex-col gap-3 w-3xl">
            <div className="flex gap-2.5">
                {slides.map((el, indx) => (
                    <button
                        key={indx}
                        className={`p-1.5 rounded-sm border-2 font-bold transition-all duration-300 ${
                            currentIndex === indx
                                ? "border-red-600 scale-110 shadow-xl"
                                : "border-gray-300 hover:border-red-600 hover:shadow-2xl hover:scale-125"
                        }`}
                        onClick={() => handleImageChange(indx)}
                    >
                        {el.title}
                    </button>
                ))}
            </div>
            <div className=" p-4 bg-gray-50 rounded-lg border whitespace-pre-line ">
                {slides[currentIndex].text}
            </div>
            <ReactCompareImage
                leftImage={slides[currentIndex].after}
                rightImage={slides[currentIndex].before}
                hover={true}
                leftImageLabel="До"
                rightImageLabel="После"
            />
        </div>
    );
};
