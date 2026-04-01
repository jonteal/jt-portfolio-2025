import resumePdf from "../../assets/JonathanJacksonResume.pdf";

export const Resume = () => (
  <section
    id="references"
    className="min-h-screen flex flex-col items-center justify-center w-full pt-12"
  >
    <h2 className="text-white text-5xl font-bold mb-3 mt-5">Resume</h2>
    <p className="text-gray-400 text-lg mb-8">Download my resume below:</p>
    <a
      href={resumePdf}
      download
      className="px-6 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition duration-300"
    >
      Download Resume
    </a>
  </section>
);
