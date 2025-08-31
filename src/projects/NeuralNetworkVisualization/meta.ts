import type { Meta } from "../../common/interfaces/meta";
import { Tags } from "../../common/utils/tags";

export const meta: Meta = {
  id: 2,
  name: "NeuralNetworkVisualization",
  displayName: "Neural Network Visualization",
  description: "This is a project that shows how neural networks are trained and used.",
  tags: [Tags.ML],
  url: "/projects/neural-network-visualization",
  preview: new URL("./preview.svg", import.meta.url).href,
  active: true,
};