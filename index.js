// function saturdayFun(activity = "roller-skate") {
//   return `This Saturday, I want to ${activity}!`;
// }
// const mondayWork = function (job = "go to the office") {
//   return `This Monday, I will ${job}.`;
// };

// function wrapAdjective(flair = "*") {
//   return function (youAre = "special") {
//     return `You are ${flair}${youAre}${flair}!`;
//   };
// }

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = "go to the office") {
  return `This Monday, I will ${work}.`;
}

function wrapAdjective(param1 = "*") {
  return function (adjective = "special") {
    return `You are ${param1}${adjective}${param1}!`;
  };
}
