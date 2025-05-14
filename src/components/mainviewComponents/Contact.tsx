import me from "../../assets/me.jpg";

export const Contact = () => (
  <section
    id="contact"
    className="min-h-screen flex flex-col items-center justify-center w-full"
  >
    <h2 className="text-white text-6xl font-bold mb-3">Get in touch</h2>
    <div className="border flex flex-row w-10/12 rounded-3xl">
      <img className="w-60 h-auto rounded-4xl p-4" src={me} alt="" />
      <div className="flex flex-col items-start justify-center w-full p-4">
        <h3 className="font-semibold text-3xl italic">
          Available for select freelance opportunities
        </h3>
        <p className="text-lg mt-2">
          Have an exciting project you need help with? Send me an email at{" "}
          <span className="bg-teal-500 text-slate-800 p-1 rounded-md">
            jonjackson.webdesign@gmail.com
          </span>
          !
        </p>
      </div>
    </div>
  </section>
);
