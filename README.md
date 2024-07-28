This repository holds the IEEE CS VIT Chennai website. The website is built using Astro, a static site generator.

## Project Structure

The project is structured in the following manner:

```text
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── layout/
│   ├── pages/
│   └── react/
├── .gitignore
├── astro.config.mjs
├── package-lock.json
├── package.json
└── tailwind.config.mjs
```

The public directory is where you can place static assets like images, fonts, and other files that you want to be copied as-is when building your site.

The src directory is where you'll spend most of your time. It contains all of the components, pages, and styles that make up your site.

In this project, we have the following directories and files:

- `assets/`: Contains all the assets like images, etc.
- `components/`: Contains all the components that are used in the website written in Astro.
- `data/`: Contains all the data that is used in the website in JavaScript and TypeScript, which is done for modularity.
- `layout/`: Contains the base layout of the website which is used in all the pages.
- `pages/`: Contains all the pages of the website.
- `react/`: Contains all the components that are written in React.
- `.gitignore`: Specifies intentionally untracked files to ignore.
- `astro.config.mjs`: Contains the configuration for the Astro project.
- `package-lock.json`: Contains the exact version of the dependencies that are installed.
- `package.json`: Contains the metadata for the project.
- `tailwind.config.mjs`: Contains the configuration for Tailwind CSS.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Further Documentation

More documentation about the components and files are included in the respective files. You can also refer to the [Astro documentation](https://docs.astro.build) for more information.
