# 🎲 Tenzies Game

A modern, interactive dice game built with React that challenges players to roll until all dice show the same value. Built with responsive design and smooth animations for an engaging gaming experience.

![Tenzies Game](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-3.0-blue?style=for-the-badge&logo=css3)

## 🎯 Live Demo

[Play Tenzies Game](https://tenzies-10-game.netlify.app/)

## ✨ Features

- **Interactive Dice Rolling**: Smooth dice animations with realistic physics
- **Smart Game Logic**: Hold individual dice to preserve their values between rolls
- **Victory Celebration**: Confetti animation when you win
- **Responsive Design**: Optimized for all screen sizes including mobile
- **Modern UI/UX**: Clean, intuitive interface with smooth transitions
- **Cross-Platform**: Works seamlessly on desktop, tablet, and mobile devices

## 🎮 How to Play

1. **Roll the Dice**: Click the "Roll" button to generate new random values
2. **Hold Dice**: Click on any die to "freeze" it at its current value
3. **Strategic Play**: Hold dice with the same value to build your winning combination
4. **Win Condition**: Get all 10 dice to show the same value to win
5. **New Game**: Click "New Game" to start over after winning

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/tenzies-game.git
   cd tenzies-game
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

## 🛠️ Built With

- **React 19.1.1** - Modern React with hooks and functional components
- **CSS3** - Custom styling with responsive design principles
- **nanoid** - Unique ID generation for dice components
- **react-confetti** - Victory celebration animations
- **Create React App** - Development and build tooling

## 📱 Responsive Design

The game is fully responsive and optimized for:

- **Desktop**: Full-featured experience with optimal layout
- **Tablet**: Touch-friendly interface with adapted sizing
- **Mobile**: Compact design with mobile-first approach
- **All Screen Sizes**: Fluid layouts that adapt to any viewport

## 🎨 Key Components

- **Main.js**: Core game logic and state management
- **Die.js**: Individual die component with click handling
- **App.js**: Main application wrapper
- **CSS Modules**: Organized styling with component-specific stylesheets

## 🔧 Customization

### Styling

- Modify colors in `src/style/App.css` and `src/style/Die.css`
- Adjust game board dimensions and spacing
- Customize button styles and animations

### Game Rules

- Change the number of dice in `Main.js` (currently 10)
- Modify win conditions in the `gameWon` logic
- Add scoring system or timer functionality

## 📊 Performance Features

- **Optimized Rendering**: Efficient React state management
- **Smooth Animations**: CSS transitions for enhanced user experience
- **Lightweight**: Minimal dependencies for fast loading
- **Accessibility**: Keyboard navigation and screen reader support

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shehab Gamal El-Deen**

- GitHub: [000Shehab000](https://github.com/000Shehab000)
- LinkedIn: [Shehab Gamal El-Deen](https://www.linkedin.com/in/shehab-gamal-el-deen/)

## 🙏 Acknowledgments

- Inspired by classic dice games
- Built with modern web development best practices
- Special thanks to the React community for excellent tooling

---

⭐ **Star this repository if you found it helpful!**
