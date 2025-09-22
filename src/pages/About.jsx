export const About = () => (
  <div className="container mx-auto py-16 px-4 min-h-screen">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">About TechFlow</h1>
      <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
        We are a passionate team of developers, designers, and strategists committed to building
        powerful, user-friendly software that solves real-world business challenges. Our mission is to
        empower companies of all sizes to thrive in a digital-first world.
      </p>
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2">
          <img
            src="https://placehold.co/600x400/08272f/555?text=Our+Team"
            alt="Our diverse team working together."
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Our vision is to become the leading provider of enterprise software, known for
            our relentless innovation and unwavering commitment to customer success. We believe in creating
            products that are not just functional, but also delightful to use.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            We are constantly exploring new technologies and methodologies to ensure our solutions
            are always at the cutting edge. We look forward to helping you achieve your goals.
          </p>
        </div>
      </div>
    </div>
  </div>
);