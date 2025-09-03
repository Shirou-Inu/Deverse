import { useEffect, useState } from "react";
import type { Meta } from "../../common/interfaces/meta";
import { loadAllProjectMeta } from "../../common/utils/loadProjects";
import ItemCard from "../../common/components/ItemCard/ItemCard";

function Projects() {
  const [projects, setProjects] = useState<Meta[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300); // 300ms delay

    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    loadAllProjectMeta().then((allProjects) => {
      const activeProjects = allProjects
        .filter((p) => p.active)
        .sort((a, b) => b.id - a.id);
      setProjects(activeProjects);
    });
  }, []);

  const filteredProjects = projects.filter((project) => {
    const query = debouncedSearch.toLowerCase();
    return (
      project.displayName.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      {/* Banner Section */}
      <section className="relative py-24 px-4 md:px-8 bg-gradient-to-br from-bg-dark to-bg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">All</span>
            <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Explore the full collection of my React and Tailwind CSS projects.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 bg-bg-light flex-1">
        <div className="mx-auto">
          {/* Search Bar */}
          <div className="mb-10 flex justify-center">
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-border-muted bg-bg text-text focus:outline-none focus:border-primary"
            />
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ItemCard
                  key={index}
                  previewSrc={project.preview}
                  title={project.displayName}
                  description={project.description}
                  tags={project.tags}
                  link={project.url}
                />
              ))
            ) : (
              <p className="text-center text-text-muted col-span-full">
                No projects found.
              </p>
            )}
          </div>
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

export default Projects;
