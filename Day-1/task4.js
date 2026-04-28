// Task 4
// This feature flag code gives unexpected results. Find the scope issue and fix it:
// var isLoggedIn = true;
// function checkAccess() {
//   if (isLoggedIn) {
//     var isLoggedIn = false;
//     console.log("inside:", isLoggedIn);
//   }
//   console.log("outside:", isLoggedIn);
// }
// checkAccess();


var isLoggedIn = true;

function checkAccess() {
  if (isLoggedIn) {
    let isLoggedIn = false;
    console.log("inside:", isLoggedIn);
  }
  console.log("outside:", isLoggedIn);
}

checkAccess();

