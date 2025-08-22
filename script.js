
const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

// Function to clean up band name by removing 'The', 'A', 'An' at the start
function cleanBandName(name) {
    const wordsToIgnore = ['the', 'a', 'an'];
    const nameLower = name.toLowerCase();
    for (let word of wordsToIgnore) {
        if (nameLower.startsWith(word + ' ')) {
            return name.slice(word.length).trim();
        }
    }
    return name;
}

// Sort the bands array alphabetically, ignoring 'The', 'A', and 'An'
const sortedBands = bands.sort((a, b) => {
    const cleanedA = cleanBandName(a);
    const cleanedB = cleanBandName(b);
    return cleanedA.localeCompare(cleanedB);
});

// Get the 'band' list element and add sorted band names
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});
