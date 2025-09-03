import { meta } from "./meta";

function ProjectTemplate() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      {/* Banner Section */}
      <header className="relative py-12 px-6 bg-gradient-to-br from-bg-dark to-bg shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            {meta.displayName}
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {meta.description}
          </p>
        </div>
      </header>

      {/* Content Section */}
      <main className="flex-1 bg-bg-light px-6 py-6">
        <div className="max-w-6xl mx-auto h-full">
          <div className="w-full h-[70vh] sm:h-[80vh] border border-border-muted rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src={`${
                import.meta.env.BASE_URL
              }projects/ProjectTemplate/index.html`}
              className="w-full h-full"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 bg-bg-dark border-t border-border-muted">
        <div className="max-w-4xl mx-auto text-center text-text-muted text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default ProjectTemplate;
