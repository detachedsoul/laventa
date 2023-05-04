import ContactForm from "@components/contact/ContactForm";
import ContactHero from "@components/contact/ContactHero";

export const metadata = {
    title: "Laventa | Contact Us",
    description: "Get in touch with us"
};

const Page = () => {
    return (
        <>
            <ContactHero />

            <main className="grid place-content-center px-4 sm:px-8">
                <ContactForm />
            </main>
        </>
    );
};

export default Page;
