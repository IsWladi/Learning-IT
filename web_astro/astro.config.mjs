// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://learnit.iswlcloud.com",
  integrations: [
    starlight({
      title: "Home",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/IsWladi/Learning-IT",
        },
      ],
      sidebar: [
        {
          label: "Docker",
          items: [
            { label: "Docker Introduction", slug: "containers/docker" },
            {
              label: "Examples",
              items: [
                {
                  label: "FastAPI",
                  items: [
                    {
                      label: "1. Basic setup (uv)",
                      items: [
                        {
                          label: "Overview",
                          slug: "containers/docker/examples/fastapi/task1/docker-fastapi-uv-basic",
                        },
                        {
                          label: "Solution",
                          slug: "containers/docker/examples/fastapi/task1/solution",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
