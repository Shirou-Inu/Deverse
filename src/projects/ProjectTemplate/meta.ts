import type { Meta } from "../../common/interfaces/meta";
import { Tags } from "../../common/utils/tags";

export const meta: Meta = {
  id: 0,
  name: "ProjectTemplate",
  displayName: "Template",
  description: "This is a template project that is used to to show how to create a new project and how to define the metadata.",
  tags: [Tags.React],
  url: "/projects/template",
  preview: new URL("./preview.svg", import.meta.url).href,
  active: false,
};