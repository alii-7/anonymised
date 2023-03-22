//your code goes here

// utils
let userLocation;
let userId;
function getBrowswerName() {
  const userAgent = navigator.userAgent;
  let browserName;
  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  } else {
    browserName = "No browser detection";
  }
  return browserName;
}

async function getUserLocation() {
  const locResponse = await fetch(
    "https://api.ipregistry.co/?key=tmo544vqe7dewnek",
    {
      method: "GET",
      keepalive: true,
    }
  );
  const loc = await locResponse.json();
  console.log("loc", loc);
  return `${loc.location.city}, ${loc.location.country.name}`;
}

// on load;
window.addEventListener("load", async () => {
  userLocation = await getUserLocation();
  userId = await getUserId();
});

// on unload; call fetch
window.addEventListener("beforeunload", async () => {
  const uag = getBrowswerName();

  const body = {
    uag,
    userId,
    location: userLocation,
    date: new Date().toString(),
    url: window.location.href,
    uag_lang: navigator.language,
  };
  console.log(body);

  await fetch("https://putsreq.herokuapp.com/ylG2esx9EkW77PmdnsUI", {
    method: "POST",
    body: JSON.stringify(body),
    keepalive: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
});
