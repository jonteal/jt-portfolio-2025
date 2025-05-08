import { ReferencesGrid } from "../ReferencesGrid";

export const Contact = () => (
  <section
    id="contact"
    className="h-screen flex flex-col items-center justify-center w-screen"
  >
    <h2 className="text-white text-6xl font-bold mb-3">Get in touch</h2>
    <div className="border flex flex-col w-9/12 rounded-3xl">
      <div className="flex flex-col items-center justify-center w-full p-4">
        <h3>Available for select freelance opportunities</h3>
        <p>
          Have an exciting project you need help with? Send me an email or
          contact me via instant message!
        </p>
      </div>
      {/* <ReferencesGrid /> */}
    </div>
  </section>
);
