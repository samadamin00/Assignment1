export const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-xl transition-transform hover:scale-105">
    <div className="text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);