### Create new Vite project, Install packages and start

```
npm create vite@latest ./
√ Select a framework: » React
√ Select a variant: » TypeScript

npm install
npm run dev
```

### Setup Shadcn

```
- npx shadcn-ui@latest init
Need to install the following packages:
  shadcn-ui@0.7.0
Ok to proceed? (y) y
√ Would you like to use TypeScript (recommended)? ... no / yes
√ Which style would you like to use? » Default
√ Which color would you like to use as base color? » Slate
√ Where is your global CSS file? ... src/globals.css
√ Would you like to use CSS variables for colors? ... no / yes
√ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) ...
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ... no / yes
√ Write configuration to components.json. Proceed? ... yes
```

### Tech Stack

- React.js
- Appwrite
- React Query
- TypeScript
- Shadcn
- Tailwind CSS

### Features

- Authentication System: A robust authentication system ensuring security and user privacy
- Explore Page: Homepage for users to explore posts, with a featured section for top creators
- Like and Save Functionality: Enable users to like and save posts, with dedicated pages for managing liked and saved content
- Detailed Post Page: A detailed post page displaying content and related posts for an immersive user experience
- Profile Page: A user profile page showcasing liked posts and providing options to edit the profile
- Browse Other Users: Allow users to browse and explore other users' profiles and posts
- Create Post Page: Implement a user-friendly create post page with effortless file management, storage, and drag-drop feature
- Edit Post Functionality: Provide users with the ability to edit the content of their posts at any time
- Responsive UI with Bottom Bar: A responsive UI with a bottom bar, enhancing the mobile app feel for seamless navigation
- React Query Integration: Incorporate the React Query (Tanstack Query) data fetching library for, Auto caching to enhance performance, Parallel queries for efficient data retrieval, First-class Mutations, etc
- Backend as a Service (BaaS) - Appwrite: Utilize Appwrite as a Backend as a Service solution for streamlined backend development, offering features like authentication, database, file storage, and more and many more, including code architecture and reusability

### Documentation

- https://tailwindcss.com/docs/guides/vite

- https://ui.shadcn.com/

- https://ui.shadcn.com/docs/installation/vite

- https://cloud.appwrite.io/

- https://tanstack.com/query/latest/docs/react/overview

### Intallation packages

- npm install -D tailwindcss postcss autoprefixer
- npm install -D tailwindcss-animate
- npx tailwindcss init -p
- npm install react-router-dom
- npm install -D @types/node
- npx shadcn-ui@latest init
- npm install appwrite
- npm install @tanstack/react-query
- npm install react-dropzone
- npm install react-intersection-observer
- npm install -g vercel

### shadcn/ui Components

- npx shadcn-ui@latest add button
- npx shadcn-ui@latest add form
- npx shadcn-ui@latest add input
- npx shadcn-ui@latest add toast
- npx shadcn-ui@latest add textarea

### Set Up Environment Variables

- Create a new file named .env in the root of your project and add the following content:

VITE_APPWRITE_URL=
<br />
VITE_APPWRITE_PROJECT_ID=
<br />
VITE_APPWRITE_DATABASE_ID=
<br />
VITE_APPWRITE_STORAGE_ID=
<br />
VITE_APPWRITE_USER_COLLECTION_ID=
<br />
VITE_APPWRITE_POST_COLLECTION_ID=
<br />
VITE_APPWRITE_SAVES_COLLECTION_ID=
<br />
<br />

<h4>Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the Appwrite website: https://appwrite.io/</h4>

## Project Steps

- Intro
- Setup
- Routing
- File & Folder Structure
- Auth Pages
- Auth Functionality - Appwrite
- Storage & Database Design
- TanStack Query
- HomePage
- Create Post
- Post Card
- Post CRUD
- Post Details
- Explore Page
- Search Results
- Active Lesson
- Deployment

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
