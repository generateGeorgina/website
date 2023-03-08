let websiteData = {
    "hobby page": {
        url: "PLACEHOLDER" 
    },
    "project gallery": {
        url: "PLACEHOLDER"
    },
    "movie data": {
        url: "PLACEHOLDER"
    },
    "website": {
        url: "PLACEHOLDER"
    },
    "game": {
        url: "PLACEHOLDER"
    },
    
};

console.log(Object.keys(websiteData));

// ul footer element
const ulFooterElement = document.getElementById('footer')

for (let websiteName in websiteData) {
    let liElement = document.createElement('a');
    let liWebsiteName = document.createTextNode(websiteName);
    console.log(websiteName);
    console.log(liWebsiteName);
    liElement.appendChild(liWebsiteName);
    liElement.setAttribute.href = websiteName['url']; //don't forget quote marks otherwise you get a reference error
}