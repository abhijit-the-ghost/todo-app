# 📝 React Todo App

A simple, stylish, and responsive **Todo App** built with **React** and **TypeScript**. Add, complete, and delete tasks with a modern, user-friendly interface.

## 🚀 Features

- 📌 Add new tasks with a single click
- ✅ Toggle tasks as completed or incomplete
- 🗑️ Delete tasks effortlessly
- 🎨 Clean, modern UI with customizable CSS variables
- 📱 Fully responsive design for mobile and desktop
- ⚡ Fast and lightweight, powered by Vite

## 📸 Screenshots

*Main interface showcasing task management*

## 📁 Project Structure

```
src/
├── components/
│   ├── TodoForm.tsx      # Form for adding new tasks
│   ├── TodoItem.tsx      # Individual task item component
│   └── TodoList.tsx      # List of all tasks
├── App.tsx               # Main app component
├── App.css               # Global styles with CSS variables
└── types.ts              # TypeScript type definitions
```

## 🧑‍💻 Getting Started

### Prerequisites

- **Node.js**: v16 or later
- **npm** or **yarn**: Latest stable version
- A modern web browser (Chrome, Firefox, etc.)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abhijit-the-ghost/react-todo-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-todo-app
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:5173 in your browser to view the app.

### Building for Production

Generate a production-ready build:

```bash
npm run build
# or
yarn build
```

The output will be in the `dist/` folder.

## 🌐 Deployment

Deploy the app to platforms like **Vercel**, **Netlify**, or **GitHub Pages**:

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy using your platform's CLI or drag-and-drop interface:

   - **Vercel**: `vercel --prod`
   - **Netlify**: Drag the `dist/` folder to the Netlify dashboard
   - **GitHub Pages**: Use `gh-pages` package or manual deployment

## 🧠 Technologies Used

- **React**: Frontend library for building UI
- **TypeScript**: Static typing for better developer experience
- **Vite**: Fast build tool and development server
- **CSS Variables**: For theming and styling

## 🎨 Customize Theme

Modify the theme in `src/App.css` using CSS variables:

```css
:root {
  --bg: #f9f9f9;
  --card: #ffffff;
  --primary: #4f46e5;
  --text: #1f2937;
  --muted: #9ca3af;
}
```

Experiment with colors to match your style!

## 🔮 Future Improvements

- 🌙 Add dark mode toggle
- 💾 Persist tasks using localStorage
- 📅 Support due dates and task filters
- 🟰 Enable drag-and-drop task reordering
- ⚡ Add animations for task transitions
- 📊 Task statistics dashboard

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

Please follow the Code of Conduct and ensure your code adheres to the project's style guidelines.

## 📄 License

This project is licensed under the MIT License.

## 🙌 Acknowledgements

- Built with ❤️ by Abhijit Guragain

---

⭐️ If you find this project useful, give it a star on GitHub!
