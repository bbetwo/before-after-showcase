import { useCallback, useState } from "react";
import ReactCompareImage from "react-compare-image";
import { slides } from "../data/dataSlide";

export const CompareImage = () => {
    const [currentIndex, setСurrentIndex] = useState(0);

    const handleImageChange = useCallback((ind: number) => {
        setСurrentIndex(ind);
    }, []);

    return (
        <div className="flex flex-col gap-3  max-w-2xl w-full">
            <div className="flex flex-wrap gap-2.5">
                {slides.map((el, indx) => (
                    <button
                        key={indx}
                        className={`p-1.5 rounded-sm border-2 font-bold text-sm transition-all duration-300 ${
                            currentIndex === indx
                                ? "border-red-600 scale-105 shadow-xl"
                                : "border-gray-300 hover:border-red-600 hover:shadow-2xl hover:scale-110"
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
                skeleton={"Загрузка..."}
                leftImage={slides[currentIndex].after}
                rightImage={slides[currentIndex].before}
                leftImageLabel="До"
                rightImageLabel="После"
            />
        </div>
    );
};
