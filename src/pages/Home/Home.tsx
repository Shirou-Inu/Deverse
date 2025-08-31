import { useEffect, useState } from "react";
import type { Meta } from "../../common/interfaces/meta";
import { loadAllProjectMeta } from "../../common/utils/loadProjects";
import ItemCard from "../../common/components/ItemCard/ItemCard";

function Home() {
  const [projects, setProjects] = useState<Meta[]>([]);

  useEffect(() => {
    loadAllProjectMeta().then(setProjects);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      {/* Banner/Hero Section */}
      <section className="relative py-24 px-4 md:px-8 bg-gradient-to-br from-bg-dark to-bg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Welcome</span>
            <span className="block">To</span>
            <span className="text-primary">Deverse</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto mb-10">
            I create modern web applications with React and Tailwind CSS. Browse
            my latest projects below.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-highlight rounded-lg font-medium hover:opacity-90 transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-border rounded-lg font-medium hover:bg-bg-light transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        {/* <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-secondary opacity-20 blur-3xl"></div> */}
        {/* <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-primary opacity-15 blur-3xl"></div> */}
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 bg-bg-light flex-1">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
            Here are some of my recent works. Each project reflects my passion
            for clean design and efficient code.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(
              (project, index) =>
                project.active && (
                  <ItemCard
                    key={index}
                    previewSrc={project.preview}
                    title={project.name}
                    description={project.description}
                    tags={project.tags}
                    link={project.url}
                  />
                )
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-bg-dark border border-border-muted">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Your Name</h2>
              <p className="text-text-muted mt-2">
                Web Developer & UI Designer
              </p>
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-text-muted hover:text-text transition-colors"
              >
                <span className="sr-only">GitHub</span>
                {/* Icon would go here */}
                <div className="w-6 h-6 bg-text-muted rounded-full"></div>
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-text transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                {/* Icon would go here */}
                <div className="w-6 h-6 bg-text-muted rounded-full"></div>
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-text transition-colors"
              >
                <span className="sr-only">Twitter</span>
                {/* Icon would go here */}
                <div className="w-6 h-6 bg-text-muted rounded-full"></div>
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border-muted text-center text-text-muted text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
