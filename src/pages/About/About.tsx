import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      {/* Banner Section */}
      <section className="relative py-24 px-4 md:px-8 bg-gradient-to-br from-bg-dark to-bg">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">About</span>
            <span className="text-primary">Me</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Learn more about who I am, my background, and my passion for
            creating clean, functional, and modern web applications.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 bg-bg-light flex-1">
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
          {/* <p>
            Hi, I’m <span className="font-bold">Aaron Yang</span>, a software
            developer with a focus on building modern, responsive, and efficient
            web applications using <span className="text-primary">React</span>{" "}
            and <span className="text-primary">Tailwind CSS</span>.
          </p> */}

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-bg-dark border border-border-muted">
        <div className="mx-auto text-center text-text-muted text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default About;
