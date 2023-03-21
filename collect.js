//your code goes here

// on unload; call fetch
window.addEventListener("unload", async (event) => {
  console.log("userId", userId);
  const movies = await fetch("https://dummyjson.com/products", {
    method: "GET",
    keepalive: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
});
