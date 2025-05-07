import { ReferencesGrid } from "../ReferencesGrid";

export const Contact = () => (
  <section className="h-screen flex flex-col items-center justify-center w-screen">
    <h2 className="text-white text-6xl font-bold">Get in touch</h2>
    <div className="border flex sm:flex-row flex-col w-9/12">
      <h3>Available for select freelance opportunities</h3>
      <p>
        Have an exciting project you need help with? Send me an email or contact
        me via instant message!
      </p>
    </div>
    <ReferencesGrid />
  </section>
);
