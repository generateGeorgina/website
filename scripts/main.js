let websiteData = {
    "hobby page": {
        url: "https://generategeorgina.github.io/hobby-page/" 
    },
    "project gallery": {
        url: "https://generategeorgina.github.io/project-gallery/"
    },
    "movie data": {
        url: "https://github.com/generateGeorgina.github.io/movie-data"
    },
    "website": {
        url: "https://generategeorgina.github.io/website/"
    },
    "game": {
        url: "PLACEHOLDER"
    },
    
};

console.log(Object.keys(websiteData));

// ul footer element
const ulFooterElement = document.getElementById('footer')

for (let websiteName in websiteData) {
    let liElement = document.createElement('li');
    // console.log(liElement);
    // console.log(ulFooterElement);
    // nest li element in ul element
    ulFooterElement.appendChild(liElement);
    // create text
    let liWebsiteName = document.createTextNode(websiteName);
    // let liWebsiteName = document.createTextNode("hello");
    console.log(websiteName);
    console.log(liWebsiteName);
    // create anchor element
    const anchorElement = document.createElement('a')
    // nest anchor element in li element
    liElement.appendChild(anchorElement);
    // add text to anchor element
    anchorElement.appendChild(liWebsiteName);
    // create an array for every website object
    websiteArray = websiteData[websiteName];
    for (let i in websiteArray) {
        //add link
        anchorElement.href = websiteArray[i];
    }
    
};