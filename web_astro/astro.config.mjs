// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // redirects: {
  //   "/": "/en",
  // },
  site: "https://learnit.iswlcloud.com",
  integrations: [
    starlight({
      title: "Learning IT",
      defaultLocale: "en",
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: "English",
        },

        es: {
          label: "Español",
        },
      },
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
            {
              label: "Docker Introduction",
              translations: { es: "Introducción a Docker" },
              slug: "containers/docker",
            },
            {
              label: "Examples",
              translations: { es: "Ejemplos" },
              items: [
                {
                  label: "FastAPI",
                  items: [
                    {
                      label: "1. Basic setup (uv)",
                      translations: { es: "1. Configuración básica (uv)" },
                      items: [
                        {
                          label: "Challenge",
                          translations: { es: "Desafio" },
                          slug: "containers/docker/examples/fastapi/task1/docker-fastapi-uv-basic",
                        },
                        {
                          label: "Solution",
                          translations: { es: "Solución" },
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
