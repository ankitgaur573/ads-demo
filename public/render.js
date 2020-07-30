httpGetAsync("http://localhost:3000/render/getAds", function(err, res){
    if(err){
        alert(err);
    }else{
        res = JSON.parse(res);
        let imageUrl = res.image;
        var img = document.createElement("img");
        img.style.width = '100px';
        img.style.height = '100px';
        img.src = imageUrl;
        var src = document.getElementById("some_random_id");
        src.appendChild(img);
    }
});

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            callback(null, xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}