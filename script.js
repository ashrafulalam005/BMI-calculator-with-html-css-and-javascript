
let weightSlider = document.getElementById("myWeight");
let weightOutput = document.getElementById("inputWeight");

let heightSlider = document.getElementById("myHeight");
let heightOutput = document.getElementById("inputHeight");

weightOutput.value = weightSlider.value;
heightOutput.value = heightSlider.value;

weightSlider.oninput = function () {
  weightOutput.value = this.value;
};
heightSlider.oninput = function () {
  heightOutput.value = this.value;
};

function showValWeight(newVal) {
  weightSlider.value = newVal;
}

function showValHeight(newVal) {
  heightSlider.value = newVal;
}

weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);

function updateValueWeight(e) {
  weightOutput.value = e.target.value;
}

function updateValueHeight(e) {
  heightOutput.value = e.target.value;
}

function calculateBmi() {
  let weight = document.bmiForm.realweight.value;
  let height = document.bmiForm.realheight.value / 100;
  let realbmi = weight / Math.pow(height, 2);
  let realbmiOutput = document.getElementById("yourbmi");
  let messageOutput = document.getElementById("evaluationMessage");
  let roundedBmi = realbmi.toFixed(1);
  messageOutput.innerHTML = "";
  realbmiOutput.innerHTML = " " + roundedBmi;
  if (roundedBmi < 18.5) {
    messageOutput.innerHTML =
      "<b> Stage: </b>You are underweight. <br> <b>Advice: </b> Increase your calorie intake <br> and consult a nutritionist.";
  } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
    messageOutput.innerHTML =
      "<b> Stage: </b>You are at a normal weight. <br> <b>Advice: </b> Maintain a balanced diet <br> and regular exercise.";
  } else if (roundedBmi >= 25 && roundedBmi <= 29.9) {
    messageOutput.innerHTML =
      "<b> Stage: </b>You are overweight. <br> <b>Advice: </b> Consider a healthy eating plan <br> and increased physical activity.";
  } else if (roundedBmi >= 30 && roundedBmi <= 34.9) {
    messageOutput.innerHTML =
      "<b> Stage: </b>You are in Obesity Class I. <br> <b>Advice: </b> Seek advice on a weight loss <br> plan and increase physical activity.";
  } else if (roundedBmi >= 35 && roundedBmi <= 39.9) {
    messageOutput.innerHTML =
      "<b> Stage: </b>You are in Obesity Class II. <br> <b>Advice: </b> Consult with a doctor for <br> a comprehensive weight loss plan.";
  } else {
    messageOutput.innerHTML =
      "<b> Stage: </b>You are in Obesity Class III. <br> <b>Advice: </b> Seek medical advice for an <br> intensive weight loss plan.";
  }
}


