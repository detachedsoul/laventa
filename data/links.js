const links = [
	{
		route: "/",
		label: "Home",
		isDropdown: false,
		icon: "fi-rr-home",
	},
	{
		route: "/",
		label: "Categories",
		isDropdown: true,
		icon: "fi-rr-settings-sliders",
		categories: [
			{
				category: "Laptops",
				route: "/",
				icon: "fi-rr-laptop code",
				description: "Lorem ipsum dolor sit amet.",
			},
			{
				category: "Headphones",
				route: "/",
				icon: "fi-rr-headphones",
				description: "Lorem ipsum dolor sit amet.",
			},
			{
				category: "Furniture",
				route: "/",
				icon: "fi-rr-chair-office",
				description: "Lorem ipsum dolor sit amet.",
			},
			{
				category: "Foot Wares",
				route: "/",
				icon: "fi-rr-ice-skate",
				description: "Lorem ipsum dolor sit amet.",
			},
		],
	},
	{
		route: "/about",
		label: "About",
		isDropdown: false,
		icon: "fi-rr-info",
	},
	{
		route: "/blog",
		label: "Blog",
		isDropdown: false,
		icon: "fi-rr-form",
	},
	{
		route: "/contact",
		label: "Contact",
		isDropdown: false,
		icon: "fi-rr-envelope",
	},
];

export default links;
