import ScrollIndicator from "@components/ScrollIndicator";

const NewArrivalsScrollIndicator = ({data}) => {
    const container = () => {
        if (typeof window !== "undefined") {
            const parentElement = document.querySelector("#new-arrivals-content-container");

            return parentElement;
        }
    };

    const perPage = () => {
		if (typeof window !== "undefined") {
			if (window.matchMedia("(min-width: 1024px)").matches) {
				return 3;
			} else if (window.matchMedia("(min-width: 640px)").matches) {
                return 2;
            } else {
				return 1;
			}

            window.addEventListener("resize", () => {
                if (window.matchMedia("(min-width: 1024px)").matches) {
                    return 3;
                } else if (window.matchMedia("(min-width: 640px)").matches) {
                    return 2;
                } else {
                    return 1;
                }
            });
		}
	};

    return (
        <div className="flex flex-wrap place-content-center gap-2">
            <ScrollIndicator
                parentElement={ container() }
                totalSlides={ data.length }
                perPage={ perPage() }
                slidesArray={ data }
            />
        </div>
    );
};

export default NewArrivalsScrollIndicator;
