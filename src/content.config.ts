import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";
import { rebuildControllerExportResponse } from "./api/generated/content-publishing.zod";

const generatedPostSchemas = rebuildControllerExportResponse.shape.posts.element.options;
const [howTo, comparison, concept, videoSummary, template] = generatedPostSchemas;

const frontmatterOverrides = {
  slug: z.string().regex(/^[a-z0-9-]+$/),
  locale: z.enum(["en", "uk", "es", "de"]),
};

export const blogPostSchema = z.discriminatedUnion("pageType", [
  howTo.omit({ bodyMdx: true, includedInRebuild: true }).extend(frontmatterOverrides),
  comparison
    .omit({ bodyMdx: true, includedInRebuild: true })
    .extend(frontmatterOverrides),
  concept.omit({ bodyMdx: true, includedInRebuild: true }).extend(frontmatterOverrides),
  videoSummary
    .omit({ bodyMdx: true, includedInRebuild: true })
    .extend(frontmatterOverrides),
  template
    .omit({ bodyMdx: true, includedInRebuild: true })
    .extend(frontmatterOverrides),
]);

const blog = defineCollection({
  loader: glob({
    pattern: "{en,uk,es,de}/*.md",
    base: "./src/content/blog/generated",
  }),
  schema: blogPostSchema,
});

export const collections = { blog };
