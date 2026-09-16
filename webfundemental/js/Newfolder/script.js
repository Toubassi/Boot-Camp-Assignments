var student = {
  firstName: "Maya",
  course: "Full Stack Development",
  learningTopics: ["objects", "functions", "this"],
  completedLessons: 3,
  totalLessons: 5,
};

var getProgressMessage = function (student) {
  var percentage = ((student.completedLessons / student.totalLessons) * 100);
  return student.firstName + " finished " + percentage + "% of the lessons.";
};

function getLearningPlan(student) {
  return student.firstName + " is practicing " + student.learningTopics + ".";
}

function printMessage(message) {
  console.log("MESSAGE: " + message.toUpperCase());
}

console.log(getLearningPlan(student));

printMessage(getLearningPlan(student));

var progressMessage = student.getLearningPlan;
console.log(progressMessage);
