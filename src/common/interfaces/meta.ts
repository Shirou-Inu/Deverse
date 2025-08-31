import type { Tag } from "../utils/tags";

export interface Meta {
  id: number;
  name: string;
  displayName: string;
  description: string;
  tags: Tag[];
  url: string;
  preview: string;
  active: boolean;
}