/**
 * Created by martin on 23/06/2017.
 */
function Cat(nom, imgURL, credit, creditURL) {
    this.nom = nom;
    this.imgURL = imgURL;
    this.credit = credit;
    this.creditURL = creditURL;
    this.clicks = 0;
    this.clickdisp = 'clickdisp'+nom;
    this.catset = function() {return '<h2>'+this.nom+'</h2>'+
        '<img id="'+this.nom+'" width="512" alt="'+this.nom+'" src="'+this.imgURL+'"/>'+
        '<br/>'+'<a class="attribution" href="'+this.creditURL+'">'+this.credit+'</a>'+
        '<br/>'+'<p>'+this.clicks+' clicks</p>'};
}

var cats = [
    cD9T = new Cat("D9T",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/CatD9T.jpg/1024px-CatD9T.jpg",
    "By Shaun Greiner (CAT D9T) [CC BY-SA 2.0 (http://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File%3ACatD9T.jpg"),
    c777D = new Cat("777D",
    "https://upload.wikimedia.org/wikipedia/commons/1/15/Caterpillar_777D.jpg",
    "By Jo Mateix (Own work) [Public domain], via Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File%3ACaterpillar_777D.jpg"),
    c323D = new Cat("323D",
    "https://upload.wikimedia.org/wikipedia/commons/4/40/Sz%C3%A9ll_K%C3%A1lm%C3%A1n_t%C3%A9r_-_2015.04.10_%281%29.JPG",
    "By Derzsi Elekes Andor (Own work) [CC BY-SA 4.0 (http://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File%3ASz%C3%A9ll_K%C3%A1lm%C3%A1n_t%C3%A9r_-_2015.04.10_(1).JPG"),
    c350D = new Cat("350D",
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Caterpillar_D350D.jpg",
    "By Bidgee (Own work) [CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File%3ACaterpillar_D350D.jpg"),
    c365B = new Cat("365B",
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Hydraulicke_demolicni_nuzky_na_podvozku_CAT_330.jpg",
    "By Michal Maňas [CC BY-SA 2.5 (http://creativecommons.org/licenses/by-sa/2.5)], via Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File%3AHydraulicke_demolicni_nuzky_na_podvozku_CAT_330.jpg")
];

for (var i in cats) {
    var elem = document.createElement('div');
    elem.innerHTML = cats[i].nom;
    elem.addEventListener('click', (function(iCopy) {
        return function() {
            document.getElementById("catviewer").innerHTML = cats[iCopy].catset();
            document.getElementById(cats[iCopy].nom).addEventListener('click', function() {
                cats[iCopy].clicks++;
                document.getElementById("catviewer").innerHTML = cats[iCopy].catset();
            })
        };
    })(i));
    document.getElementById("list").appendChild(elem);
}