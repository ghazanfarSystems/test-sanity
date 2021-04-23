export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60829b3e07c18b00d1c32e5c",
                  title: "Sanity Studio",
                  name: "test-sanity-studio-7k5bjkij",
                  apiId: "0ea81024-68a5-4097-ae8f-1163285452e3",
                },
                {
                  buildHookId: "60829b3e33835d00bfbd238f",
                  title: "Blog Website",
                  name: "test-sanity-web-16xkgk3p",
                  apiId: "e0869ccf-3ec1-4c6e-8fe3-ec404a7185b8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ghazanfarSystems/test-sanity",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://test-sanity-web-16xkgk3p.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
