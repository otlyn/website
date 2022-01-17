# Create React TypeScript project
```bash
npx create-react-app my-project --template typescript
cd my-project
```

# Rename master branch to main
```bash
git branch -m main
```

# Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

# Configure Tailwind
```js
// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

# Change App.tsx to Tailwind for test
```html
<h1 className="text-3xl font-bold underline">
    Hello world!
</h1>
```

# Run project
```bash
npm run start
```

# Storybook
```bash
npx sb init
```

# Add Tailwind to Storybook
```js
// .storybook/preview.js

import '../src/index.css';
```

# Add Sass
```bash
npm i node-sass
```

# Change css to scss
For example, `Header.module.css` to `Header.module.scss` -> Done 👍