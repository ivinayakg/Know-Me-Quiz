var readline = require("readline-sync");

//data of high scores
var highscores = [
  {
    name: "Vinayak",
    score: 10,
  },
  {
    name: "Dhruv",
    score: 3,
  },
  {
    name: "Tanay",
    score: 1,
  },
  {
    name: "Vishal",
    score: 6,
  },
];

//data of questions and answers
var level1 = {
  1: {
    question: "\n\nMy Full Name:",
    answer: "Vinayak",
  },
  2: {
    question: "Introvert or Extrovert",
    answer: "Introvert",
  },
  3: {
    question: "What I want to do in life?",
    answer: "Code",
  },
  4: {
    question: "Do I have a girlfriend? (Hint: No)",
    answer: "No",
  },
  5: {
    question: "Am I intellectual? (Don't want to show off)",
    answer: "Yes",
  },
  6: {
    question: "Do I hangout?",
    answer: "No",
  },
};

var level2 = {
  1: {
    question: "Do You Exercise?",
    answer: "Yes",
  },
  2: {
    question: "Do I share my popular gyaan? (No i dont show off)",
    answer: "Yes",
  },
  3: {
    question: "Do I overthink my social actions?",
    answer: "Yes",
  },
  4: {
    question: "Do I talk often to you? (probably NO)",
    answer: "No",
  },
};

// to check wether the ans given and real answer are same?
const check = (ans, ansGiven) => {
  if (ans.toUpperCase() === ansGiven.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};

//main function which handles users according to the score and level
function game(level, score, check) {
  var keys = Object.keys(level);
  for (var i = 0; i < keys.length; i++) {
    var ans = readline.question(level[keys[i]].question + "\t");
    var result = check(ans, level[keys[i]].answer);
    if (result) {
      score += 1;
      console.log("You Are Right***", `\t\tYour Score Is - ${score}`, "\n\n");
    } else {
      console.log("You Are Wrong-", `\tYour Score Is - ${score}`, "\n\n");
    }
  }
  return score;
}

score = 0;
console.log(
  "Lets See How Much You Really Know Me?\nYou need a score of 7 to pass\n\n"
);
var name = readline.question("What's Your Name?\t\n");

//works while the user doesnt get the advice they need
while (score <= 7) {
  if (score < 5) {
    score = 0;
    score = game(level1, score, check);
    if (score >= 5) {
      console.log("You Know Atleast A Little\n\n");
    } else {
      console.log(
        "Sorry You Don't Know Me Enough\tWork On Your Socialising Skills!"
      );
      break;
    }
  } else if (score < 7) {
    console.log("Now lets see how much you really Know Me \n");
    score = game(level2, score, check);
    if (score < 8) {
      console.log(
        "You are just a random guy who just happens to know a bit of me!\n"
      );
    } else {
      console.log("You know decently enough stay away from me!!!");
    }
  } else {
    console.log(
      "I Hate To Break It You But You Need To Work On Your Social Skills!!!"
    );
    break;
  }
}

if (score > 8) {
  console.log(
    `${name} has broken the score, with ${
      score - 8
    }\n\nThis is not possible so just stay away from me(No, I'm absolutely mentally stable)\n`
  );
}

highscores.push({ name: name, score: score });

//at the end compare and share the high scores
function bestPlayer(highScores = highscores) {
  for (var i = 0; i < highScores.length; i++) {
    var uScore = highScores[i].score;
    var uName = highScores[i].name;
    if (uScore > 8) {
      uName = `*${uName}  High Score`;
    } else {
      uName = `-${uName}`;
    }
    console.log(uName, "\t", uScore);
  }
}

bestPlayer();
