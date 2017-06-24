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
        '<img id="cat-'+this.nom+'" width="512" alt="'+this.nom+'" src="'+this.imgURL+'"/>'+
        '<br/>'+'<a class="attribution" href="'+this.creditURL+'">'+this.credit+'</a>'+
        '<br/>'+'<p>'+this.clicks+' clicks</p>'};
}

var cD9T = new Cat("D9T",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/CatD9T.jpg/1024px-CatD9T.jpg",
    "By Shaun Greiner (CAT D9T) [CC BY-SA 2.0 (http://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File%3ACatD9T.jpg");
var c777D = new Cat("777D",
    "https://upload.wikimedia.org/wikipedia/commons/1/15/Caterpillar_777D.jpg",
    "By Jo Mateix (Own work) [Public domain], via Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File%3ACaterpillar_777D.jpg");

var cats = [cD9T, c777D];

for (var i in cats) {
    var elem = document.createElement('div');
    elem.innerHTML = cats[i].catset();
    elem.id = cats[i].nom;
    elem.addEventListener('click', (function(iCopy) {
        return function() {
            cats[iCopy].clicks++;
            document.getElementById(cats[iCopy].nom).innerHTML = cats[iCopy].catset();
        };
    })(i));
    document.getElementById("catty").appendChild(elem);
}