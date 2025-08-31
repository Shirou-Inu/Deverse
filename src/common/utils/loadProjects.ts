import type { Meta } from "../interfaces/meta";

export async function loadAllProjectMeta(): Promise<Meta[]> {
  const modules = import.meta.glob<{meta: Meta}>("../../projects/**/meta.ts");
  const metas: Meta[] = [];

  for (const path in modules) {
    const mod = await modules[path]();
    metas.push(mod.meta);
  }

  return metas;
}