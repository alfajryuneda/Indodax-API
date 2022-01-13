const INDODAX_URL = "https://indodax.com/api/summaries";

fetch(INDODAX_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    // console.warn("Something went wrong.", err);
    // alert("Error URL");
  });
let per = 0;
function appendData(data) {
  const coin = data.tickers;
  // console.log(coin);
  const mainContainer = document.getElementById("coin");
  for (let key in coin) {
    const div = document.createElement("div");

    fetch("https://indodax.com/api/pairs")
      .then(function (response) {
        return response.json();
      })
      .then(function (pair) {
        //console.log(pair[2].url_logo_png);
        // appendData(pair);
        if (coin[key].high == coin[key].last) {
          div.innerHTML = ` 
          <details class="bg_high">
            <summary>
              <div class="img_container">
                <img src="${pair[per].url_logo}" alt="" class="size_img">
              </div>
              <h2>${coin[key].name}</h2>
              <p>High : ${coin[key].high}</p>
              <p>Low : ${coin[key].low}</p>
              <p>Last : ${coin[key].last}</p>
            </summary>
            <div class="content">
              <p>Vol IDR : ${coin[key].vol_idr}</p>
              <p>Buy : ${coin[key].buy}</p>
              <p>Sell : ${coin[key].sell}</p>
            </div>
          </details>
        `;
            } else if (coin[key].low == coin[key].last) {
              div.innerHTML = ` 
          <details class="bg_low">
            <summary>
              <div class="img_container">
                <img src="${pair[per].url_logo}" alt="" class="size_img">
              </div>
              <h2>${coin[key].name}</h2>
              <p>High : ${coin[key].high}</p>
              <p>Low : ${coin[key].low}</p>
              <p>Last : ${coin[key].last}</p>
            </summary>
            <div class="content">
              <p>Vol IDR : ${coin[key].vol_idr}</p>
              <p>Buy : ${coin[key].buy}</p>
              <p>Sell : ${coin[key].sell}</p>
            </div>
          </details>
        `;
            } else {
              div.innerHTML = ` 
          <details>
            <summary>
              <div class="img_container">
                <img src="${pair[per].url_logo}" alt="" class="size_img">
              </div>
              <h2>${coin[key].name}</h2>
              <p>High : ${coin[key].high}</p>
              <p>Low : ${coin[key].low}</p>
              <p>Last : ${coin[key].last}</p>
            </summary>
            <div class="content">
              <p>Vol IDR : ${coin[key].vol_idr}</p>
              <p>Buy : ${coin[key].buy}</p>
              <p>Sell : ${coin[key].sell}</p>
            </div>
          </details>
        `;
        }
        mainContainer.appendChild(div);
        per++;
      })
      .catch(function (err) {
        console.log("Something went wrong.", err);
        // alert("Error PAIRS");
      });
  }
  console.log(mainContainer);
}
