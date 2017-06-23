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
    // this.sclickdisp = '$clickdisp'+nom;
    // this.hclickdisp = '#clickdisp'+nom;
    this.catset = function() {return '<img id="cat-'+this.nom+'" width="512" alt="'+this.nom+'" src="'+this.imgURL+'"/>'+
        '<br/>'+'<a class="attribution" href="'+this.creditURL+'">'+this.credit+'</a>'+
        '<p id="'+this.clickdisp+'">'+this.clicks+' clicks</p>'};
}

var $catty = $('#catty');

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
    $catty.append(cats[i].catset());
    // var cats[i].sclickdisp = $('cats[i].hclickdisp');
    // $('#cat-'+cats[i].nom+'').click(function() {
    //     cats[i].clicks++;
    //     cats[i].sclickdisp.text('clicked ' + cats[i].clicks + ' times')
    // });
}

var $clickdispD9T = $('#clickdispD9T');
$('#cat-D9T').click(function() {
    cD9T.clicks++;
    $clickdispD9T.text('clicked ' + cD9T.clicks + ' times')
});

var $clickdisp777D = $('#clickdisp777D');
$('#cat-777D').click(function() {
    c777D.clicks++;
    $clickdisp777D.text('clicked ' + c777D.clicks + ' times')
});