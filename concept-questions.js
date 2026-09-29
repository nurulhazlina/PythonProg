// ═══════════════════════════════════════════════════════════════
//  concept-questions.js
//  Concept Inventory Question Bank — Snake Game Python Tutorial
//
//  PRE_POST_QUESTIONS : 50 questions (5 per step) used in
//    survey-pre.html AND survey-post.html (identical questions).
//
//  STEP_CHECK_QUESTIONS : 50 questions (5 per step) embedded
//    in each step-N-activity.html AFTER the post-calibration
//    gate and BEFORE the reflective journal.
//    Different wording from pre/post but tests same concepts.
// ═══════════════════════════════════════════════════════════════

var PRE_POST_QUESTIONS = {

  /* ── STEP 1: Python Setup & Variables ───────────────────── */
  1: [
    { q: "What is the correct way to create a variable called score in Python?",
      opts: ["var score = 0", "score = 0", "int score = 0", "declare score = 0"],
      ans: 1 },
    { q: "What does print(\"Hello\") do?",
      opts: ["Stores 'Hello' in memory", "Displays Hello on the screen", "Creates a variable", "Imports a module"],
      ans: 1 },
    { q: "Which is a valid Python variable name?",
      opts: ["2snake", "snake_speed", "snake-speed", "snake speed"],
      ans: 1 },
    { q: "What is the output of:  x = 10\n  print(x + 5)",
      opts: ["x + 5", "10", "15", "Error"],
      ans: 2 },
    { q: "What does import pygame do?",
      opts: ["Installs pygame on your computer", "Creates a game window", "Loads the pygame library into your script", "Starts the game loop"],
      ans: 2 }
  ],

  /* ── STEP 2: Game Loop & Events ─────────────────────────── */
  2: [
    { q: "What is the main purpose of a game loop?",
      opts: ["To end the game automatically", "To continuously update game state and render graphics", "To load images from disk", "To define variables"],
      ans: 1 },
    { q: "What does  while True:  create?",
      opts: ["A loop that runs exactly once", "A loop that runs forever until a break or exit", "A conditional statement", "A function definition"],
      ans: 1 },
    { q: "In pygame, what does pygame.event.get() return?",
      opts: ["The current score", "The game window object", "A list of all events that occurred since last call", "The player's position"],
      ans: 2 },
    { q: "What does FPS stand for in game programming?",
      opts: ["File Processing System", "Frames Per Second", "Function Processing Speed", "Frame Print Size"],
      ans: 1 },
    { q: "How do you exit a pygame game loop cleanly?",
      opts: ["Close the terminal window", "Press any key", "Call pygame.quit() and sys.exit()", "Delete the Python file"],
      ans: 2 }
  ],

  /* ── STEP 3: Direction Control ───────────────────────────── */
  3: [
    { q: "What does pygame.K_UP represent?",
      opts: ["Scrolling the window up", "The UP arrow keyboard key", "Increasing game speed", "A mouse click event"],
      ans: 1 },
    { q: "Which structure handles multiple mutually-exclusive keyboard conditions most cleanly?",
      opts: ["A for loop", "A while loop", "An if-elif-else chain", "A try-except block"],
      ans: 2 },
    { q: "If the snake is currently moving RIGHT, which direction must be blocked?",
      opts: ["Up", "Down", "Left", "Right itself"],
      ans: 2 },
    { q: "What does elif mean in Python?",
      opts: ["else if — an additional condition branch", "end if loop", "else is false", "extended if statement"],
      ans: 0 },
    { q: "With x = 5, what prints?\n  if x > 5: print('big')\n  elif x == 5: print('five')\n  else: print('small')",
      opts: ["big", "five", "small", "Error"],
      ans: 1 }
  ],

  /* ── STEP 4: Food & Collision ────────────────────────────── */
  4: [
    { q: "Which Python module is used to generate random food positions?",
      opts: ["math", "random", "pygame", "sys"],
      ans: 1 },
    { q: "How do you check if the snake's head has reached the food?",
      opts: ["snake_head == food_position", "snake.eat(food)", "collision.check()", "if snake > food"],
      ans: 0 },
    { q: "What does random.randint(0, 10) return?",
      opts: ["A decimal between 0 and 10", "Always 5", "A random whole number from 0 to 10 inclusive", "An error"],
      ans: 2 },
    { q: "What happens when the snake hits the wall?",
      opts: ["It bounces back", "Nothing happens", "The game ends (Game Over)", "It teleports to the other side"],
      ans: 2 },
    { q: "Which condition correctly checks if snake_x is out of bounds (window width W)?",
      opts: ["snake_x > 0", "snake_x == W", "snake_x < 0 or snake_x >= W", "snake_x != W"],
      ans: 2 }
  ],

  /* ── STEP 5: Score & Levels ──────────────────────────────── */
  5: [
    { q: "How do you increase a variable score by 10?",
      opts: ["score = 10", "score + 10", "score += 10", "score = score + score"],
      ans: 2 },
    { q: "Which code correctly displays 'Score: 25' when score = 25?",
      opts: ["print('Score: score')", "print('Score: ' + score)", "print('Score: ' + str(score))", "print(Score, 25)"],
      ans: 2 },
    { q: "When should the level increase in a typical snake game?",
      opts: ["Every real-time second", "When the player presses L", "When the score reaches a set threshold", "At the very start of the game"],
      ans: 2 },
    { q: "What does score = 0 at the start of the game achieve?",
      opts: ["Deletes the score from memory", "Initialises the score so it can be incremented later", "Displays 0 on screen", "Causes an error"],
      ans: 1 },
    { q: "Which change would make the snake move faster at a higher level?",
      opts: ["speed = speed", "Decrease the clock.tick() delay (smaller number = faster)", "speed = 0", "Doubling speed"],
      ans: 1 }
  ],

  /* ── STEP 6: Functions ───────────────────────────────────── */
  6: [
    { q: "Which keyword defines a function in Python?",
      opts: ["function", "def", "func", "define"],
      ans: 1 },
    { q: "What does the return statement do inside a function?",
      opts: ["Ends the whole program", "Prints a value to the screen", "Sends a value back to wherever the function was called", "Creates a new loop"],
      ans: 2 },
    { q: "What is a function parameter?",
      opts: ["The function's name", "A value passed into the function when it is called", "The value the function sends back", "A variable created after the function runs"],
      ans: 1 },
    { q: "def add(a, b): return a + b\n\nWhat does add(3, 4) return?",
      opts: ["'a + b'", "7", "3", "4"],
      ans: 1 },
    { q: "Why is it better to use functions instead of repeating the same code?",
      opts: ["Functions always run faster", "Functions make code reusable and easier to maintain", "Functions delete variables automatically", "Python requires them for all programs"],
      ans: 1 }
  ],

  /* ── STEP 7: Lists ───────────────────────────────────────── */
  7: [
    { q: "How do you create an empty list in Python?",
      opts: ["my_list = {}", "my_list = []", "my_list = ()", "my_list = \"\""],
      ans: 1 },
    { q: "What does my_list.append(5) do?",
      opts: ["Removes 5 from the list", "Creates a new list with just 5", "Adds 5 to the end of the list", "Sorts the list"],
      ans: 2 },
    { q: "Given snake = [(0,0), (1,0), (2,0)], what is snake[0]?",
      opts: ["(1,0)", "(0,0)", "(2,0)", "Error"],
      ans: 1 },
    { q: "How does the snake body grow when it eats food?",
      opts: ["By duplicating the entire list", "By appending a new segment position to the list", "By creating a new variable", "By copying the tail"],
      ans: 1 },
    { q: "What does del snake[-1] do to the snake body list?",
      opts: ["Deletes the first segment", "Clears the entire list", "Removes the last segment", "Sorts the list"],
      ans: 2 }
  ],

  /* ── STEP 8: Debugging ───────────────────────────────────── */
  8: [
    { q: "A NameError in Python means:",
      opts: ["The code logic is wrong", "A variable or name was used before being defined", "Indentation is incorrect", "A module could not be found"],
      ans: 1 },
    { q: "What causes an IndexError?",
      opts: ["Using the wrong function name", "Accessing a list index that does not exist", "Forgetting a colon at the end of a line", "Using the wrong variable type"],
      ans: 1 },
    { q: "A SyntaxError means:",
      opts: ["The program's logic produces the wrong result", "The code violates Python's grammar rules", "A file is missing", "The program crashed at runtime"],
      ans: 1 },
    { q: "What is the best first step when you see an error message?",
      opts: ["Rewrite the entire program from scratch", "Read the error message and traceback carefully", "Delete the file and start over", "Run the program again and hope it works"],
      ans: 1 },
    { q: "How does adding print(my_variable) inside a loop help debugging?",
      opts: ["It automatically fixes the error", "It shows the variable's actual value at each iteration", "It deletes the variable", "It creates a new variable"],
      ans: 1 }
  ],

  /* ── STEP 9: Optimisation ────────────────────────────────── */
  9: [
    { q: "What does code optimisation mean?",
      opts: ["Making code longer and more detailed", "Making code run faster or use less memory without changing its behaviour", "Adding more features", "Removing all functions"],
      ans: 1 },
    { q: "Which is the most efficient way to remove the last snake segment each frame?",
      opts: ["Creating a brand-new list every frame", "Using snake.pop() or del snake[-1]", "Rewriting the entire loop", "Restarting the game"],
      ans: 1 },
    { q: "What is a 'magic number' in code?",
      opts: ["A variable that changes every frame", "A hard-coded literal number with no explanation of what it means", "A special built-in function", "A randomly generated value"],
      ans: 1 },
    { q: "Why define SCREEN_WIDTH = 600 instead of writing 600 everywhere?",
      opts: ["Python requires it", "It makes code readable and means you only update one place", "Constants run faster than literals", "Literals cause runtime errors"],
      ans: 1 },
    { q: "What does refactoring mean?",
      opts: ["Deleting old code permanently", "Adding new game features", "Restructuring existing code without changing what it does", "Fixing syntax errors"],
      ans: 2 }
  ],

  /* ── STEP 10: Final Project ──────────────────────────────── */
  10: [
    { q: "Which approach is most effective when starting a complex project?",
      opts: ["Writing all the code at once before testing", "Breaking the project into small, testable pieces", "Copying someone else's solution", "Skipping the planning stage"],
      ans: 1 },
    { q: "In the final snake game, which component handles the player's keyboard input?",
      opts: ["The draw_snake() function", "The event loop / event handler", "The score variable", "The food class"],
      ans: 1 },
    { q: "What is the purpose of a main game function (e.g. def main())?",
      opts: ["To display graphics only", "To organise the game's overall flow and call other functions", "To import all modules", "To create lists"],
      ans: 1 },
    { q: "When your finished game has a bug that only appears sometimes, what should you do first?",
      opts: ["Rewrite the game from scratch", "Try to reproduce the bug consistently, then trace the logic", "Ignore it — it's probably fine", "Ask Python to fix it automatically"],
      ans: 1 },
    { q: "What makes code 'maintainable'?",
      opts: ["Being very long and detailed", "Having no comments at all", "Being readable, well-organised, and using named constants", "Running as fast as possible"],
      ans: 2 }
  ]
};

// ─────────────────────────────────────────────────────────────────
//  PER-STEP CONCEPT CHECKS  (embedded in each activity page)
//  Different wording from pre/post — tests the same concepts.
// ─────────────────────────────────────────────────────────────────
var STEP_CHECK_QUESTIONS = {

  /* ── STEP 1 ──────────────────────────────────────────────── */
  1: [
    { q: "Which of these is a string (text) value in Python?",
      opts: ["42", "True", "\"snake\"", "3.14"],
      ans: 2 },
    { q: "What does WIN_WIDTH = 600 create?",
      opts: ["A function called WIN_WIDTH", "A named constant storing 600", "A loop that runs 600 times", "An import statement"],
      ans: 1 },
    { q: "What will this print?\n  x = 3\n  x = x + 1\n  print(x)",
      opts: ["3", "x + 1", "4", "Error"],
      ans: 2 },
    { q: "Which line correctly imports the pygame library?",
      opts: ["include pygame", "import pygame", "use pygame", "load pygame"],
      ans: 1 },
    { q: "What does pygame.init() do?",
      opts: ["Creates a display window", "Imports the pygame module", "Initialises all pygame subsystems (sound, display, etc.)", "Starts the game loop immediately"],
      ans: 2 }
  ],

  /* ── STEP 2 ──────────────────────────────────────────────── */
  2: [
    { q: "What does clock.tick(FPS) control inside the game loop?",
      opts: ["The current score", "The frame rate — how fast the loop runs", "Which keys are pressed", "The window size"],
      ans: 1 },
    { q: "Which pygame event type fires when the user closes the window?",
      opts: ["pygame.KEYDOWN", "pygame.QUIT", "pygame.MOUSEMOVE", "pygame.KEYUP"],
      ans: 1 },
    { q: "What is the game loop responsible for each iteration?",
      opts: ["Loading files from disk", "Reading input, updating state, and drawing — every frame", "Defining global variables", "Creating new functions"],
      ans: 1 },
    { q: "How many times does  while True:  run (with no break)?",
      opts: ["Exactly once", "Ten times", "Until break or sys.exit() is called", "It never starts"],
      ans: 2 },
    { q: "What value does pygame.event.get() return when no events have occurred?",
      opts: ["None", "False", "An empty list []", "An error"],
      ans: 2 }
  ],

  /* ── STEP 3 ──────────────────────────────────────────────── */
  3: [
    { q: "How is the snake's current direction typically stored in the game?",
      opts: ["As a boolean True/False", "As a string like 'UP' or a tuple like (0,-1)", "As a floating-point number", "As a pygame event"],
      ans: 1 },
    { q: "What condition prevents the snake from reversing directly?",
      opts: ["Checking the score", "Comparing the requested direction to the opposite of the current one", "Checking the window boundary", "Comparing speed values"],
      ans: 1 },
    { q: "if event.type == pygame.KEYDOWN: — what does this test?",
      opts: ["A mouse click", "Whether a keyboard key was pressed this frame", "Whether the window was resized", "A timer event"],
      ans: 1 },
    { q: "Which direction vector moves the snake one cell to the RIGHT?",
      opts: ["(0, 1)", "(-1, 0)", "(1, 0)", "(0, -1)"],
      ans: 2 },
    { q: "What should happen if the player presses the LEFT key while the snake moves RIGHT?",
      opts: ["The snake speeds up", "The input is ignored — opposite direction blocked", "The game ends immediately", "The snake teleports"],
      ans: 1 }
  ],

  /* ── STEP 4 ──────────────────────────────────────────────── */
  4: [
    { q: "food_x = random.randint(0, GRID_W-1) * CELL_SIZE\nWhy multiply by CELL_SIZE?",
      opts: ["To give the food a random colour", "To snap food positions to the grid", "To hide the food", "To increase the score"],
      ans: 1 },
    { q: "What event triggers spawning a new food position?",
      opts: ["A timer firing every 5 seconds", "The player pressing F", "The snake head position equalling the food position", "The player clicking the mouse"],
      ans: 2 },
    { q: "Self-collision means:",
      opts: ["The snake hits the window wall", "The snake's head touches one of its own body segments", "Two food items overlap", "The score overflows"],
      ans: 1 },
    { q: "pygame.draw.rect(win, GREEN, [x, y, w, h]) draws:",
      opts: ["A circle", "A text label", "A filled rectangle", "A straight line"],
      ans: 2 },
    { q: "Which stores a food position correctly as grid coordinates?",
      opts: ["food = 'center'", "food = (rand_col, rand_row)", "food.position()", "food = []"],
      ans: 1 }
  ],

  /* ── STEP 5 ──────────────────────────────────────────────── */
  5: [
    { q: "Why is str(score) needed in:  'Score: ' + str(score)?",
      opts: ["To copy the score", "Because the + operator needs both sides to be the same type (string)", "To sort the score", "To double the score"],
      ans: 1 },
    { q: "What does score += 1 mean?",
      opts: ["score = 1", "Subtract 1 from score", "Add 1 to score", "Multiply score by 1"],
      ans: 2 },
    { q: "if score % 5 == 0: level += 1\nThis triggers when:",
      opts: ["score equals 5 only", "score is exactly divisible by 5", "score is greater than 5", "Always — every frame"],
      ans: 1 },
    { q: "To restart the game when R is pressed, which code is correct?",
      opts: ["if event.key == pygame.K_r: reset_game()", "restart = True", "score = 1", "while r:"],
      ans: 0 },
    { q: "Increasing level speed means:",
      opts: ["More keys can be pressed per second", "A smaller clock.tick() argument (higher FPS cap)", "The snake grows larger", "The screen gets bigger"],
      ans: 1 }
  ],

  /* ── STEP 6 ──────────────────────────────────────────────── */
  6: [
    { q: "def draw_snake(body): — what is body in this line?",
      opts: ["The function's return value", "A parameter — a value passed in when the function is called", "A global variable", "A module import"],
      ans: 1 },
    { q: "What does a function return when it has no return statement?",
      opts: ["An error", "The number 0", "None", "True"],
      ans: 2 },
    { q: "Why call draw_snake(body) instead of pasting the drawing code everywhere?",
      opts: ["It makes the program faster", "To keep the code DRY — reuse logic without repeating it", "Python disallows inline code", "Inline code is harder to read only for beginners"],
      ans: 1 },
    { q: "What is variable scope?",
      opts: ["The screen resolution", "The region of code where a variable can be read or written", "How quickly a variable is computed", "The number of times a variable is used"],
      ans: 1 },
    { q: "def is_collision(head, body): return head in body\nWhat type of value does this return?",
      opts: ["The head position", "A string", "True or False (bool)", "The body list"],
      ans: 2 }
  ],

  /* ── STEP 7 ──────────────────────────────────────────────── */
  7: [
    { q: "snake = [(5,5),(4,5),(3,5)]\nWhat is snake[1]?",
      opts: ["(5,5)", "(4,5)", "(3,5)", "Error"],
      ans: 1 },
    { q: "How does the snake appear to move each frame?",
      opts: ["All segments jump to new random positions", "A new head is inserted at front; last segment is removed from back", "The tail creates new segments", "Positions are shuffled randomly"],
      ans: 1 },
    { q: "snake.insert(0, new_head) — what does this do?",
      opts: ["Removes the tail segment", "Adds new_head at position 0 (the front of the list)", "Replaces all existing segments", "Sorts the list by x-coordinate"],
      ans: 1 },
    { q: "What does len(snake) tell you?",
      opts: ["The snake's x position", "The last element in the list", "The total number of body segments", "The snake's current speed"],
      ans: 2 },
    { q: "snake.pop() removes:",
      opts: ["The first element", "A random element", "The last element", "All elements"],
      ans: 2 }
  ],

  /* ── STEP 8 ──────────────────────────────────────────────── */
  8: [
    { q: "TypeError: unsupported operand type(s) for +: 'int' and 'str' usually means:",
      opts: ["Wrong variable name used", "You tried to add an integer and a string directly", "A colon is missing", "A list index is out of range"],
      ans: 1 },
    { q: "Why read a Python traceback from the bottom up?",
      opts: ["Python reads code backwards", "The most specific error information appears at the bottom", "The top line is always wrong", "Tracebacks work differently in pygame"],
      ans: 1 },
    { q: "Adding print(snake_body) inside the game loop helps because:",
      opts: ["It automatically fixes list errors", "You can see the exact state of the list each frame", "It stops the loop when something goes wrong", "It changes the score"],
      ans: 1 },
    { q: "IndentationError means:",
      opts: ["You used the wrong variable name", "Python found inconsistent or unexpected indentation", "A bracket is missing", "Too many functions are defined"],
      ans: 1 },
    { q: "'Rubber-duck debugging' means:",
      opts: ["Using a special debugging IDE plugin", "Explaining your code line-by-line (even to an inanimate object) to spot logic errors", "Restarting the Python interpreter", "Removing all print statements"],
      ans: 1 }
  ],

  /* ── STEP 9 ──────────────────────────────────────────────── */
  9: [
    { q: "Replacing the literal 30 with CELL_SIZE = 30 throughout the code is better because:",
      opts: ["It makes the program run faster", "You only need to change one line to update all usages", "Python requires uppercase for numbers", "It creates a list automatically"],
      ans: 1 },
    { q: "What does a # TODO: add sound comment indicate?",
      opts: ["A syntax error Python will catch", "A note marking work planned for the future", "A function definition", "An import shortcut"],
      ans: 1 },
    { q: "Moving snake-drawing code into a draw_snake() function is an example of:",
      opts: ["Adding a new game feature", "Refactoring — isolating responsibility into a dedicated function", "Debugging a crash", "Creating an infinite loop"],
      ans: 1 },
    { q: "A helper function grid_to_pixel(col, row) is useful because:",
      opts: ["It slows the game slightly for safety", "It converts coordinates in one place and can be called anywhere", "It creates new global variables", "It handles keyboard events"],
      ans: 1 },
    { q: "Which of these is NOT a benefit of using named constants?",
      opts: ["Easier to read code", "Single place to update a value", "Slightly faster execution", "Self-documenting — the name explains the number"],
      ans: 2 }
  ],

  /* ── STEP 10 ─────────────────────────────────────────────── */
  10: [
    { q: "MVP in game development means:",
      opts: ["Most Valuable Player", "The simplest working version you can build and test first", "Maximum Video Processing", "Minimum Variable Program"],
      ans: 1 },
    { q: "Which is NOT a good first step when adding a new game feature?",
      opts: ["Plan the logic on paper", "Write pseudocode", "Write all the code at once before planning", "Identify what the feature needs to know and do"],
      ans: 2 },
    { q: "'Separation of concerns' in your game means:",
      opts: ["Keeping all code inside one giant function", "Splitting input, logic update, and drawing into separate functions/sections", "Using only global variables", "Never using functions"],
      ans: 1 },
    { q: "A game state machine is useful for managing:",
      opts: ["The snake's body list positions", "Different game modes: PLAYING, PAUSED, GAME_OVER", "Food random positions", "Screen background colours"],
      ans: 1 },
    { q: "Which of these makes game code most maintainable for the long term?",
      opts: ["Writing everything in one long file", "No comments — 'clean' code explains itself", "Named constants, clear function names, and organised structure", "Running at maximum possible speed"],
      ans: 2 }
  ]
};
