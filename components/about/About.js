import Link from "next/link";
import Image from "next/image";
import android from "@assets/img/download-android.svg";
import iOS from "@assets/img/download-ios.svg";

const About = () => {
    return (
        <>
            <section className="grid items-center lg:grid-cols-2">
                <div className="relative h-[50vh] lg:h-screen">
                    <Image className="w-full h-full object-cover object-center" src="/img/01.jpg" alt="Search, Select, Buy online" quality={100} fill />
                </div>

                <div className="space-y-4 grid place-content-center order-1 p-4 lg:order-none lg:p-12">
                    <h2 className="header text-2xl">
                        Search, Select, Buy online
                    </h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus pellentesque faucibus a quis eros. In eu fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum erat, at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod sagittis at, pharetra eu nisl. Phasellus id ante at velit tincidunt hendrerit. Aenean dolor dolor tristique nec. Tristique nulla aliquet enim tortor at auctor urna nunc. Sit amet aliquam id diam maecenas ultricies mi eget.
                    </p>

                    <div>
                        <Link className="py-2 px-3 rounded-md inline-block w-auto bg-brand-red text-white hover:bg-brand-dark-rose shadow-card" href="/categories">
                            View Products
                        </Link>
                    </div>
                </div>
            </section>

            <section className="grid items-center lg:grid-cols-2">
                <div className="space-y-4 grid place-content-center order-1 p-4 lg:order-none lg:p-12">
                    <h2 className="header text-2xl">
                        Fast delivery worldwide
                    </h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus pellentesque faucibus a quis eros. In eu fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum erat, at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod sagittis at, pharetra eu nisl. Phasellus id ante at velit tincidunt hendrerit. Aenean dolor dolor tristique nec. Tristique nulla aliquet enim tortor at auctor urna nunc. Sit amet aliquam id diam maecenas ultricies mi eget.
                    </p>

                    <div>
                        <Link className="py-2 px-3 rounded-md inline-block w-auto bg-blue-700 text-white hover:bg-blue-800 shadow-card" href="/categories">
                            Shipping details
                        </Link>
                    </div>
                </div>

                <div className="relative h-[50vh] lg:h-screen">
                    <Image className="w-full h-full object-cover object-center" src="/img/02.jpg" alt="Fast delivery worldwide" quality={100} fill />
                </div>
            </section>

            <section className="grid items-center lg:grid-cols-2">
                <div className="relative h-[50vh] lg:h-screen">
                    <Image className="w-full h-full object-cover object-center" src="/img/03.jpg" alt="Great mobile app. Shop on the go" quality={100} fill />
                </div>

                <div className="space-y-4 grid place-content-center order-1 p-4 lg:order-none lg:p-12">
                    <h2 className="header text-2xl">
                        Great mobile app. Shop on the go
                    </h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus pellentesque faucibus a quis eros. In eu fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum erat, at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod sagittis at, pharetra eu nisl. Phasellus id ante at velit tincidunt hendrerit. Aenean dolor dolor tristique nec. Tristique nulla aliquet enim tortor at auctor urna nunc. Sit amet aliquam id diam maecenas ultricies mi eget.
                    </p>

                    <div className="flex gap-4 items-center">
                        <Link href="/">
                            <Image
                                src={android}
                                alt="Download app on android devices on the Google PlayStore"
                                quality={100}
                            />
                        </Link>

                        <Link href="/">
                            <Image
                                src={iOS}
                                alt="Download app on iOS devices on the Apple App Store"
                                quality={100}
                            />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="grid items-center lg:grid-cols-2">
                <div className="space-y-4 grid place-content-center order-1 p-4 lg:order-none lg:p-12">
                    <h2 className="header text-2xl">
                        Shop offline. Cozy outlet stores
                    </h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus pellentesque faucibus a quis eros. In eu fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum erat, at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod sagittis at, pharetra eu nisl. Phasellus id ante at velit tincidunt hendrerit. Aenean dolor dolor tristique nec. Tristique nulla aliquet enim tortor at auctor urna nunc. Sit amet aliquam id diam maecenas ultricies mi eget.
                    </p>

                    <div>
                        <Link className="py-2 px-3 rounded-md inline-block w-auto bg-orange-700 text-white hover:bg-orange-800 shadow-card" href="/categories">
                            See outlet stores
                        </Link>
                    </div>
                </div>

                <div className="relative h-[50vh] lg:h-screen">
                    <Image className="w-full h-full object-cover object-center" src="/img/04.jpg" alt="Shop offline. Cozy outlet stores" quality={100} fill />
                </div>
            </section>
        </>
    );
};

export default About;
