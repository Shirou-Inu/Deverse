import type { Meta } from "../../common/interfaces/meta";
import { Tags } from "../../common/utils/tags";

export const meta: Meta = {
  id: 1,
  name: "GameOfLife",
  displayName: "Conway's Game of Life",
  description: "A classic cellular automaton simulation built with React and Tailwind CSS.",
  tags: [Tags.React, Tags.Simulation],
  url: "/projects/game-of-life",
  preview: new URL("./preview.svg", import.meta.url).href,
  active: true
};