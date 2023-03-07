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
    console.log(websiteName[url]);
    liElement.setAttribute.href = websiteName[url];
}