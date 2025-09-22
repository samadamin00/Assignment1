import React from 'react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { text: 'About', href: '#' },
      { text: 'Careers', href: '#' },
      { text: 'Brand Center', href: '#' },
      { text: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Help Center',
    links: [
      { text: 'Discord Server', href: '#' },
      { text: 'Twitter', href: '#' },
      { text: 'Facebook', href: '#' },
      { text: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { text: 'Privacy Policy', href: '#' },
      { text: 'Licensing', href: '#' },
      { text: 'Terms & Conditions', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:px-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="me-3 h-8" alt="FlowBite Logo" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Flowbite</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            {footerLinks.map((column, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">{column.title}</h2>
                <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="hover:underline">{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="text-center sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          {/* Social icons can be added here and made dynamic as well if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;