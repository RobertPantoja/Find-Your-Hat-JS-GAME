# Find the Hat

Find the Hat is a game where you need to navigate a field with holes and try to find a hat while avoiding falling into a hole. The game is played in the command line interface.

## Prerequisites

Before you can play the game, you need to have Node.js installed on your computer.

## Installation

1. Clone the repository to your local machine using:
```git clone https://github.com/your-username/find-the-hat.git```

2. Navigate to the project directory using the following command:
```cd find-the-hat```

3. Install the dependencies using the following command:
```npm install```

## How to Play

To play the game, run the following command in the project directory:

```node main.js```

This will start the game and display the game field in the command line interface. The field consists of a grid of cells, with a hat ("^") and a player ("*") randomly placed on the grid. The player is always placed in the top-left corner of the grid.

To move the player, entering the following commands:

- U: Move the player up one row.
- D: Move the player down one row.
- L: Move the player left one column.
- R: Move the player right one column.

The goal of the game is to navigate the player to the hat without falling into a hole ("O") or falling out of the field. If the player falls into a hole, the game is over. If the player finds the hat, the game is won.

## Customization

You can customize the game by modifying the following constants in the main.js file:

In the *a* const the three parameters are height, width an probability.

WIDTH: The width of the game field.
HEIGHT: The height of the game field.
PROBABILITY: The probability of a hole being placed in each cell of the game field.

## Acknowledgments

This game was inspired by a project in Codecademy's Front-End Engineer course.
