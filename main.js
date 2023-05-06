// NASA Account Details

// Account Email: vivekbabu754@gmail.com
// Account ID: 2821722c-a0e4-4cd3-b8fe-a7f579f1ed8a

// NASA api key
const key = 'v5aK4airZhfjD8ULrEr0wwB07t8njdw2gq6ji6R8';


var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var img4 = document.getElementById("img4")
var img5 = document.getElementById("img5")
var btn = document.getElementById("btn")
var link = document.getElementById("link")
var downloadImageBtn = document.getElementById("downloadImageBtn")

btn.addEventListener('click', function () {
    fetch('https://api.nasa.gov/planetary/apod?api_key=' + key)
        .then(response => response.json())
        .then(data => {
            var image = data['url']
            console.log(data);
            img1.src = image;
            img1.style.display = "inline-block"
        });
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=' + key)
        .then(Response => Response.json())
        .then(Data => {
            console.log(Data);
            img2.src = Data['photos'][0]['img_src']
            img2.style.display = "inline-block"
            img3.src = Data['photos'][1]['img_src']
            img3.style.display = "inline-block"
            img4.src = Data['photos'][2]['img_src']
            img4.style.display = "inline-block"
            img5.src = Data['photos'][3]['img_src']
            img5.style.display = "inline-block"
        })
})