let date = document.getElementById("input");
date.addEventListener("click", function () {
  this.showPicker();
});

let now = new Date();
let todayYear = now.getFullYear();
let todayMonth = now.getMonth() + 1;
let todayDate = now.getDate();

let result = document.getElementById("input_box");
let btn = document.getElementById("findAge");

btn.addEventListener("click", function () {
  let value = date.value;
  console.log(value);

  if (value) {
    let [userYear, userMonth, userDate] = value.split("-").map(Number);
    let userEnteredDate = new Date(userYear, userMonth - 1, userDate);
    let today = new Date(todayYear, todayMonth - 1, todayDate);

    // 🔴 Prevent future dates
    if (userEnteredDate > today) {
      result.innerHTML = `
        <p class="text-[#ffff76] text-[25px] font-semibold">Please enter a valid date from the past!</p>
      `;
      result.className = "block";
    }

    let userAgeYear = todayYear - userYear;
    let userAgeMonth = todayMonth - userMonth;
    let userAgeDate = todayDate - userDate;

    if (
      userMonth > todayMonth ||
      (userMonth === todayMonth && userDate > todayDate)
    ) {
      userAgeYear--;
      userAgeMonth += 12;
    }

    if (userDate > todayDate) {
      let lastMonthDays = new Date(todayYear, todayMonth - 1, 0).getDate();
      userAgeDate += lastMonthDays;
      userAgeMonth--;
    }

    result.innerHTML = `
      <p class="text-[25px] font-semibold">You are <span class="text-[#ffff76]">${userAgeYear}</span> years, <span class="text-[#ffff76]">${userAgeMonth}</span> months, and <span class="text-[#ffff76]">${userAgeDate}</span> days old.</p>
    `;
    result.className = "block";
    console.log(
      `User is ${userAgeYear} years, ${userAgeMonth} months, and ${userAgeDate} days old.`
    );
  }
});
