import type { Meta } from "../../common/interfaces/meta";
import { Tags } from "../../common/utils/tags";

export const meta: Meta = {
  id: 1,
  name: "ConwayGameOfLife",
  displayName: "Conway's Game of Life",
  description: "My implementation of Conway's Game of Life",
  tags: [Tags.React, Tags.Simulation],
  url: "/projects/conway-game-of-life",
  preview: new URL("./preview.svg", import.meta.url).href,
  active: true
};