const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
  'Counterparts', 'oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

const list = document.querySelector("#list");

console.log("Original:", bands);

// Sorting by ignoring 'a', 'an', 'the'
const sortedBands = bands.sort((a, b) => {
  const nameA = a.replace(/^(a |an |the)/i, "").trim().toLowerCase();
  const nameB = b.replace(/^(a |an |the)/i, "").trim().toLowerCase();
  return nameA.localeCompare(nameB);
});

console.log("Sorted:", sortedBands);

// Display in list
sortedBands.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;   // safer than innerHTML
  list.append(li);
});
