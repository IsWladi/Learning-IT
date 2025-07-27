// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // redirects: {
  //   "/": "/es",
  // },
  site: "https://learnit.iswlcloud.com",
  integrations: [
    starlight({
      title: "Learning IT",
      defaultLocale: "es",
      locales: {
        es: {
          label: "Español",
        },
        en: {
          label: "English",
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
              label: "Introducción a Docker",
              translations: { en: "Docker Introduction" },
              slug: "containers/docker",
            },
            {
              label: "Ejemplos",
              translations: { en: "Examples" },
              items: [
                {
                  label: "FastAPI",
                  items: [
                    {
                      label: "1. Configuración básica (uv)",
                      translations: { en: "1. Basic setup (uv)" },
                      items: [
                        {
                          label: "Desafío",
                          translations: { en: "Challenge" },
                          slug: "containers/docker/examples/fastapi/task1/docker-fastapi-uv-basic",
                        },
                        {
                          label: "Solución",
                          translations: { en: "Solution" },
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
