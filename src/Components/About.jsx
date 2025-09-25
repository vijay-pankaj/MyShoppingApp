import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-10 px-6 sm:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto space-y-12">

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400">
          About Me and MyApp
        </h1>

        <section className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-4 transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">👨 About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi, I’m <span className="font-semibold text-indigo-600 dark:text-indigo-400">Vijay Pankaj</span>, a recent B.Tech graduate in Computer Science and Engineering.  
            I have a passion for building clean, modern, and responsive web applications.
          </p>
          <p className="text-lg leading-relaxed">
            I focus on <strong>efficient state management, user experience, and clean UI design</strong>. 
            This app is a demonstration of my skills in React, Redux, Tailwind CSS, and routing.
          </p>
          <p className="text-lg leading-relaxed">
            Some of my key interests include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Frontend development using React and Redux Toolkit.</li>
            <li>Building responsive and accessible UI components.</li>
            <li>Working with APIs and dynamic data fetching.</li>
            <li>Implementing user authentication and protected routes.</li>
          </ul>
          <div className="mt-6">
  <h3 className="text-xl font-semibold mb-2">Connect With Me:</h3>
  <ul className="list-disc list-inside space-y-1 text-indigo-600">
    <li>
      <a
        href="https://www.linkedin.com/in/vijay-pankaj-48109b207/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        LinkedIn
      </a>
    </li>
    <li>
      <a
        href="https://github.com/vijay-pankaj"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        GitHub
      </a>
    </li>
    <li>
      <span className="font-medium">Email:</span> vijaypankaj960@gmail.com
    </li>
  </ul>
</div>

        </section>

        <section className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-4 transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🌐 Overview</h2>
          <p className="text-lg leading-relaxed">
            This is a modern <strong>React-based shopping app</strong> designed to provide a seamless and responsive online shopping experience. 
            Users can browse products, search for specific items, filter by categories, sort by price or rating, and view detailed product information.
          </p>
          <p className="text-lg leading-relaxed">
            The app is entirely frontend-focused, built using <span className="font-semibold">Vite</span> for fast bundling, <span className="font-semibold">React</span> for dynamic UI, and <span className="font-semibold">Tailwind CSS</span> for responsive styling.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-4 transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🚀 Key Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Fetches product data from a public API and displays it dynamically.</li>
            <li>Search functionality to quickly find products.</li>
            <li>Category filtering and sorting options to easily organize products.</li>
            <li>Add or remove items to/from the cart with Redux state management.</li>
            <li>View detailed product pages using <code>useParams</code> and React Router DOM.</li>
            <li>Protected routes for login/signup pages to secure the app.</li>
            <li>Dark/Light mode toggle implemented using a custom hook.</li>
            <li>Responsive design for mobile, tablet, and desktop devices.</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-4 transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">💻 Technology Stack</h2>
          <p className="text-lg leading-relaxed">
            This project demonstrates expertise in modern frontend development:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li><strong>React:</strong> Component-based UI for dynamic rendering.</li>
            <li><strong>Redux Toolkit:</strong> State management for cart, login, and mode toggle.</li>
            <li><strong>React Router DOM:</strong> Routing and protected routes.</li>
            <li><strong>Tailwind CSS:</strong> Responsive and utility-first styling.</li>
            <li><strong>Vite:</strong> Fast bundling and development environment.</li>
          </ul>
        </section>

        

        <section className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-4 transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🎯 Future Goals</h2>
          <p className="text-lg leading-relaxed">
            My goal is to expand this project into a more complete e-commerce platform with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Persistent cart using local storage or backend integration.</li>
            <li>User profiles with order history and preferences.</li>
            <li>Advanced filtering, sorting, and recommendation system.</li>
            <li>Better UI/UX with animations and accessibility improvements.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default About;
