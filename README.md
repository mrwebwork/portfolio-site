# My Professional Portfolio

This portfolio website, built with Next.js and React, showcases my front-end development skills. It features project showcases, an about section, and a contact form. More features are currently under active development.

## Features

- **Reusable components:** Components such as `Header`, `Footer`, `ProjectCard`, `MobileNavbar`, `DesktopNavBar`, and `ToggleTheme` are reused across the entire website, demonstrating DRY (Don't Repeat Yourself) principles.
- **Styling:** Tailwind CSS and CSS Modules are used for component-level styles, resulting in a clean and organized codebase.
- **Static files:** Static files, like images, are served from the `public` directory.
- **Deployment:** The site is hosted on GitHub Pages, demonstrating knowledge of version control and continuous deployment practices.
- **Toggle Theme Component:** A versatile UI feature is demonstrated through, the `Toggle Theme`, which provides an engaging and accessible user interface. This component enables seamless transitioning between dark and light themes, catering to diverse user preferences and promoting an inclusive digital experience. This demonstrates an understanding of user-centered design and adherence to the principles of universal design.
- **Contact Form Integration with SendGrid:** Incorporating SendGrid's powerful transactional email services, the website's contact form enables users to send messages directly through the site interface. This seamless integration showcases the adept use of third-party APIs to enhance website functionality and user interaction, promoting active engagement.

## Branching Strategy

This project follows a three-tiered branching model to ensure clean and stable code releases. Here's how I use each branch:

- **Dev:** The `dev` branch is the working branch where all new features are developed and tested. All feature branches should be merged into `dev` first. This allows me to integrate and validate new changes in a controlled environment before moving them into `staging`.

- **Staging:** The `staging` branch is used for pre-production testing. Once changes in the `dev` branch have been tested and validated, they are merged into `staging`. This branch mirrors what would be in production and provides a chance to catch any potential issues before they reach the main branch.

- **Main:** The `main` branch reflects the current state of live production code. Changes are only pushed to `main` after they have been thoroughly tested in both the `dev` and `staging` branches. This ensures that `main` always holds stable and reliable code.

## Getting Started

To get started with this project, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
