function ProjectTemplate() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Project Template</h1>
      <iframe
        src={`${import.meta.env.BASE_URL}projects/ProjectTemplate/index.html`}
        className="w-full h-full border rounded-2xl shadow"
      />
    </div>
  );
}

export default ProjectTemplate;
