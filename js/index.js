submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("Clicked!");
  resultsCont.innerHTML = `<img src="img/loading.svg" alt="" />`;
  let key = "ema_live_0fWJCblc58pHHTtKp7IWIeQrT9ovNvQ1TyphgKUc";
  let email = document.getElementById("Email").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

  let res = await fetch(url);
  let result = await res.json();
  let str = ``;
  for (key of Object.keys(result)) {
    str = str + `<div> ${key}: ${result[key]} </div>`;
  }

  console.log(str);
  resultsCont.innerHTML = str;
});
