This README is specifically designed for your **WahidSaeed/GameofLife** repository. Since the project is built using **JavaScript** and **HTML**, this documentation focuses on a web-based implementation of the simulation.

---

# Conway's Game of Life

A lightweight, browser-based implementation of John Conway's **Game of Life** using JavaScript and HTML5 Canvas. This project simulates a cellular automaton where complex patterns emerge from a simple set of initial conditions.

## 🚀 Live Demo

You can run this project locally by opening the `index.html` file in any modern web browser.

## 🛠️ Features

* **Grid-based Simulation**: A visual representation of cells living, dying, and reproducing.
* **Pure JavaScript**: No external frameworks or heavy libraries required.
* **Interactive UI**: View the evolution of patterns in real-time.

## 📖 Rules of the Game

The universe of the Game of Life is a two-dimensional grid of square cells, each of which is in one of two possible states: **alive** or **dead**. Every cell interacts with its eight neighbors.

1. **Underpopulation**: Any live cell with fewer than two live neighbors dies.
2. **Survival**: Any live cell with two or three live neighbors lives on to the next generation.
3. **Overpopulation**: Any live cell with more than three live neighbors dies.
4. **Reproduction**: Any dead cell with exactly three live neighbors becomes a live cell.

## 📂 Project Structure

```text
├── index.html       # The structure and canvas element for the simulation
├── main.js          # The core logic, grid rendering, and rule implementation
└── README.md        # Project documentation

```

## 💻 How to Run Locally

1. **Clone the repository**:
```bash
git clone https://github.com/WahidSaeed/GameofLife.git
cd GameofLife

```


2. **Open the project**:
* Simply double-click `index.html` to open it in your default browser.
* Alternatively, use a local server (like "Live Server" in VS Code) for a better development experience.



## 🔧 Customization

You can modify the simulation settings in `main.js`:

* **Grid Size**: Change the number of rows and columns.
* **Resolution**: Adjust the size of individual cells.
* **Update Speed**: Tweak the interval at which each generation is calculated.

## 📜 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

---

**Developed by [Wahid Saeed**](https://github.com/WahidSaeed)
