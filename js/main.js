var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

function title(){
    if (filename === 'index.html'){
        t = "Packages and Pricing";
        b = "Insert money grabbing scheme text here";
    } else if (filename === 'about.html'){
        t = "About the Visioneers";
        b = "Meet the visioneers";
    } else if (filename === 'packages.html'){
        t = "Packages and Pricing";
        b = "Below are the packages that are available for the use of our software";
    }
    document.all['jumbotron'].innerHTML = '<h1 class="display-4" id="title">' + t + '</h1><p class="lead">' + b + '</p>';
}

title();