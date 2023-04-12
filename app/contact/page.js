import ContactHero from "@components/contact/ContactHero";
import ContactForm from "@components/contact/ContactForm";

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
