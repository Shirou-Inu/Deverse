import type { Meta } from "../../common/interfaces/meta";
import { Tags } from "../../common/utils/tags";

export const meta: Meta = {
  id: 2,
  name: "Pong",
  displayName: "Pong",
  description: "My implementation of the classic pong game",
  tags: [Tags.React, Tags.Simulation],
  url: "/projects/pong",
  preview: new URL("./preview.svg", import.meta.url).href,
  active: true
};