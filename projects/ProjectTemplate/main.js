// Create a container
const container = document.createElement("div");
container.style.fontFamily = "sans-serif";
container.style.fontSize = "2rem";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.width = "100vw";
container.style.height = "100vh";
container.style.backgroundColor = "#f0f0f0";
container.textContent = "Project Template";
// Reset body margin and append container
document.body.style.margin = "0";
document.body.appendChild(container);
// Optional: dynamically resize if needed (mostly redundant with vw/vh)
window.addEventListener("resize", () => {
    container.style.width = `${window.innerWidth}px`;
    container.style.height = `${window.innerHeight}px`;
});
export {};
