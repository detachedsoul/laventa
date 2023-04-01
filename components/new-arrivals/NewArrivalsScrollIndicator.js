"use client";

import ScrollIndicator from "@components/ScrollIndicator";
import { useState, useEffect } from "react";

const NewArrivalsScrollIndicator = ({data}) => {
    const [slidePerPage, setSlidePerPage] = useState(1);

    const container = () => {
        if (typeof window !== "undefined") {
            const parentElement = document.querySelector("#new-arrivals-content-container");

            return parentElement;
        }
    };

    // const perPage = () => {
	// 	if (typeof window !== "undefined") {
    //         // Listen to screen resize event and update the number of slides to be shown accordingly
    //         window.addEventListener("resize", () => {
    //             if (window.matchMedia("(min-width: 1024px)").matches) {
    //                 return setSlidePerPage(() => 3);
    //             } else {
    //                 return setSlidePerPage(() => 1);
    //             }
    //         });
	// 	}
	// };

    // useEffect(() => {
    //     window.addEventListener("resize", () => {
    //         if (window.matchMedia("(min-width: 1024px)").matches) {
    //             return setSlidePerPage(() => 3);
    //         } else {
    //             return setSlidePerPage(() => 1);
    //         }
    //     });

    //     if (window.matchMedia("(min-width: 1024px)").matches) {
    //         return setSlidePerPage(() => 3);
    //     } else {
    //         return setSlidePerPage(() => 1);
    //     }

    // }, []);

    if (typeof window !== "undefined") {
        if (window.matchMedia("(min-width: 1024px)").matches) {
            return setSlidePerPage(() => 3);
        } else {
            return setSlidePerPage(() => 1);
        }
    }

    return (
        <div className="flex flex-wrap place-content-center gap-2">
            <ScrollIndicator
                parentElement={ container() }
                totalSlides={ data.length }
                perPage={ slidePerPage }
                slidesArray={ data }
            />
        </div>
    );
};

export default NewArrivalsScrollIndicator;
