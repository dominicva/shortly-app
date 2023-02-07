export default function Hero() {
  return (
    <div className="rounded-md bg-white">
      <section className="mb-16 h-72 w-full bg-hero bg-cover bg-[center_left_1rem] bg-no-repeat" />
      <section>
        <h1 className="mb-4 text-center text-4xl font-bold">
          More than just shorter links
        </h1>
        <p className="mb-8 text-center text-lg leading-7 text-manatee">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="flex justify-center">
          <button className="rounded-full bg-dark-turqoise px-10 py-3 text-xl font-bold text-white">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
