"use client";

import {useState} from "react";

const ScrollIndicator = ({parentElement, totalSlides, perPage, slidesArray}) => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const divisionRemainder = totalSlides%perPage;
    const isEven = (perPage%2) === 0 ? true : false;

    // Create a copy of the original array of slides based on the number of slides to be shown per page. This would be used to calculate how many indicators to be shown
    let copyArr = slidesArray.slice(0, divisionRemainder === 0 || isEven ? Math.round(totalSlides/perPage) : Math.round((totalSlides/perPage)+1));

    const slide = (slideIndex) => {
		if (slideIndex > currentSlide) {
			// Know the positon of the clicked slide among other slides and then scroll to that slide
			const difference = slideIndex - currentSlide;

			if (difference === 1) {
				parentElement.current.scrollLeft += parentElement.current.offsetWidth;;
			} else {
				parentElement.current.scrollLeft += parentElement.current.offsetWidth * (difference + 1);
			}
			setCurrentSlide(() => slideIndex);
		} else if (slideIndex < currentSlide) {
			// Know the positon of the clicked slide among other slides and then scroll to that slide
			const difference = currentSlide - slideIndex;

			if (difference === 1) {
				parentElement.current.scrollLeft -= parentElement.current.offsetWidth;;
			} else {
				parentElement.current.scrollLeft -= parentElement.current.offsetWidth * (difference + 1);
			}
			setCurrentSlide(() => slideIndex);
		} else {
			return;
		}
	};

    return (
        copyArr.map((slides, index) => (
            <span className={`rounded-full inline-block transition-all ease-linear duration-300 cursor-pointer ${currentSlide === (index+1) ? 'px-5 bg-brand-red lg:py-1' : 'p-2 bg-gray-500 lg:p-1'}`} onClick={() => slide((index+1))} key={index}></span>
        ))
    );
};

export default ScrollIndicator;
