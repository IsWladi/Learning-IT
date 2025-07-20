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
            // Each item here is one entry in the navigation menu.
            { label: "Docker Introduction", slug: "containers/docker" },
            {
              label: "Docker Examples",
              items: [
                {
                  label: "FastAPI",
                  items: [
                    {
                      label: "Tasks",
                      slug: "containers/docker/examples/fastapi",
                    },
                    {
                      label: "Task Solution #1",
                      slug: "containers/docker/examples/fastapi/task1",
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
