var docs = [
  document.getElementById("name1"),
  document.getElementById("source"),
  document.getElementById("name2"),
  document.getElementById("name3"),
  document.getElementById("name4"),
  document.getElementById("name5")
]

setInterval(
 () => {
   docs[1].value = docs[0].value + "_" + docs[2].value + "=" + "\\frac{" + docs[3].value + "-" + docs[4].value + "}{" + docs[5].value + "}"
 },
100
)