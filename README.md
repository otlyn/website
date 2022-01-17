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

# Storybook!!!
I'd like to get this working with Storybook as well. But I'm unable to do it currently. Instead of staying blocked, perhaps I can ask someone more experienced to help... Aza?

Here's the best source I could find of a recent working version of React, Tailwind, TypeScript and Storybook... it also has Sass which is super nice! 