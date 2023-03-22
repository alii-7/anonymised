//the value of userId which should be passed into the collect.js
async function getUserId() {
  // CAUSES CORS ERROR

  // const resp = await fetch("https://www.uuidtools.com/api/generate/v4");
  // const uids = await resp.json();
  // return uids[0];

  const uuid = crypto.randomUUID();
  return uuid;
}

// utils
function loadCollectScript() {
  const scriptEle = document.createElement("script");
  scriptEle.setAttribute("src", "collect.js");
  scriptEle.setAttribute("id", "collect");
  document.body.appendChild(scriptEle);
}

// on load; check user's persistent choice; if true, add script
document.currentScript.onload = function () {
  const choice = localStorage.getItem("choice") === "true";
  if (choice) loadCollectScript();
};

// https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript
const isRunning = document.currentScript.getAttribute("isRunning") === "true";

// if isRunning, add triangle
if (isRunning) {
  const triangle = document.createElement("div");
  triangle.setAttribute("id", "triangle");
  triangle.style.borderTop = "60px solid transparent";
  triangle.style.borderLeft = "60px solid blue";
  triangle.style.position = "fixed";
  triangle.style.bottom = "0px";
  triangle.style.left = "0px";
  triangle.style.zIndex = 4;
  document.body.appendChild(triangle);

  triangle.addEventListener("click", function () {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
    modal.showModal();
  });

  const modal = document.createElement("dialog");
  modal.style.resize = "both";
  const accept = document.createElement("button");
  const reject = document.createElement("button");

  accept.classList.add(
    "w3-button",
    "w3-black",
    "w3-padding-large",
    "w3-large",
    "w3-margin"
  );
  reject.classList.add(
    "w3-button",
    "w3-black",
    "w3-padding-large",
    "w3-large",
    "w3-margin"
  );

  accept.textContent = "Accept";
  accept.setAttribute("id", "accept");
  reject.textContent = "Reject";
  reject.setAttribute("id", "reject");
  accept.addEventListener("click", function () {
    const isLoaded = document.getElementById("collect");
    if (!isLoaded) {
      loadCollectScript();
      localStorage.setItem("choice", true);
    }
    modal.close();
  });
  reject.addEventListener("click", function () {
    const isLoaded = document.getElementById("collect");
    document.body.style.height = "auto";
    document.body.style.overflow = "auto";
    localStorage.setItem("choice", false);
    if (isLoaded) document.getElementById("collect").remove();
    modal.close();
  });

  modal.appendChild(accept);
  modal.appendChild(reject);

  document.body.append(modal);
}
