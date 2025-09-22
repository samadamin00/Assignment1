import { Link } from "react-router";
import { FeatureCard } from "../components/FeaturesCard";

export const Home = () => (
  <>
    <div className="bg-gray-900 text-white py-20 px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">Elevate Your Workflow with TechFlow.</h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fadeInUp delay-200">
        Innovative software solutions designed to streamline your business operations and fuel growth.
      </p>
      <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition-all transform hover:scale-110 animate-pulse-slow">
        Get Started
      </Link>
    </div>

    <section className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Core Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Intuitive Analytics"
          description="Gain deep insights with our powerful, easy-to-use data analytics dashboard."
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21m1-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8-18m1-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM4 14v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1zm0-4v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1z" /></svg>}
        />
        <FeatureCard
          title="Seamless Integration"
          description="Connect with your favorite tools and platforms effortlessly."
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15M8 9.5l4-4 4 4M10 16l-4 4-4-4" /></svg>}
        />
        <FeatureCard
          title="24/7 Support"
          description="Our dedicated team is always here to help you succeed, day or night."
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
        />
      </div>
    </section>
  </>
);
