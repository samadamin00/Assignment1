import React from 'react';

const faqData = [
  {
    id: 1,
    question: 'What do you mean by "Figma assets"?',
    answer: 'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.',
  },
  {
    id: 2,
    question: 'What does "lifetime access" exactly mean?',
    answer: 'Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.',
  },
  {
    id: 3,
    question: 'How does support work?',
    answer: 'We\'re aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project. Feel free to <a href="#" class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline" target="_blank" rel="noreferrer">contact us</a> and we\'ll help you out as soon as we can.',
  },
  {
    id: 4,
    question: 'I want to build more than one project. Is that allowed?',
    answer: 'You can use Windster for an unlimited amount of projects, whether it\'s a personal website, a SaaS app, or a website for a client. As long as you don\'t build a product that will directly compete with Windster either as a UI kit, theme, or template, it\'s fine. Find out more information by <a href="#" class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline">reading the license</a>.',
  },
  {
    id: 5,
    question: 'What does "free updates" include?',
    answer: 'The <a href="#" class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline">roadmap</a> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.',
  },
  {
    id: 6,
    question: 'What does the free version include?',
    answer: 'The <a href="#" class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline">free version</a> of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it. You can use this version for any purposes, because it is open-source under the MIT license.',
  },
  {
    id: 7,
    question: 'What is the difference between Windster and Tailwind UI?',
    answer: 'Although both Windster and Tailwind UI are built for integration with Tailwind CSS, the main difference is in the design, the pages, the extra components and UI elements that Windster includes. Additionally, Windster is a project that is still in development, and later it will include both the application, marketing, and e-commerce UI interfaces.',
  },
  {
    id: 8,
    question: 'Can I use Windster in open-source projects?',
    answer: 'Generally, it is accepted to use Windster in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to Windster itself. With that being said, feel free to use this design kit for your open-source projects. Find out more information by <a href="#" class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline">reading the license</a>.',
  },
];

const FAQ = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
        <div className="grid border-t border-gray-200 pt-8 text-left md:grid-cols-2 md:gap-16 dark:border-gray-700">
          {faqData.map((item) => (
            <div key={item.id} className="mb-10">
              <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                </svg>
                {item.question}
              </h3>
              <p
                className="text-gray-500 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;