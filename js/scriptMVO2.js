/**
 * Created by martin on 24/06/2017.
 */

var model = {
    selectedCat: null,
    cats: [{
        name:       "D9T",
        imgURL:     "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/CatD9T.jpg/1024px-CatD9T.jpg",
        credit:     "By Shaun Greiner (CAT D9T) [CC BY-SA 2.0 (http://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons",
        creditURL:  "https://commons.wikimedia.org/wiki/File%3ACatD9T.jpg",
        clicks:     0
    },{
        name:       "777D",
        imgURL:     "https://upload.wikimedia.org/wikipedia/commons/1/15/Caterpillar_777D.jpg",
        credit:     "By Jo Mateix (Own work) [Public domain], via Wikimedia Commons",
        creditURL:  "https://commons.wikimedia.org/wiki/File%3ACaterpillar_777D.jpg",
        clicks:     0
    },{
        name:       "323D",
        imgURL:     "https://upload.wikimedia.org/wikipedia/commons/4/40/Sz%C3%A9ll_K%C3%A1lm%C3%A1n_t%C3%A9r_-_2015.04.10_%281%29.JPG",
        credit:     "By Derzsi Elekes Andor (Own work) [CC BY-SA 4.0 (http://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons",
        creditURL:  "https://commons.wikimedia.org/wiki/File%3ASz%C3%A9ll_K%C3%A1lm%C3%A1n_t%C3%A9r_-_2015.04.10_(1).JPG",
        clicks:     0
    },{
        name:       "350D",
        imgURL:     "https://upload.wikimedia.org/wikipedia/commons/d/d1/Caterpillar_D350D.jpg",
        credit:     "By Bidgee (Own work) [CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons",
        creditURL:  "https://commons.wikimedia.org/wiki/File%3ACaterpillar_D350D.jpg",
        clicks:     0
    },{
        name:       "365B",
        imgURL:     "https://upload.wikimedia.org/wikipedia/commons/1/1b/Hydraulicke_demolicni_nuzky_na_podvozku_CAT_330.jpg",
        credit:     "By Michal Maňas [CC BY-SA 2.5 (http://creativecommons.org/licenses/by-sa/2.5)], via Wikimedia Commons",
        creditURL:  "https://commons.wikimedia.org/wiki/File%3AHydraulicke_demolicni_nuzky_na_podvozku_CAT_330.jpg",
        clicks:     0
    }]
};


var listView = {
    init: function() {
        var i;
        cats = octopus.getCats();
        for (i = 0; i < cats.length; i++) {
            var elem = document.createElement('div');
            elem.innerHTML = cats[i].name;
            elem.addEventListener('click', (function(I) {
                return function() {
                    octopus.selectCat(I);
                    catView.render(I)
                };
            })(i));
            document.getElementById("list").appendChild(elem);
        }
    }
};

var catView = {
    init: function() {
        document.getElementById("catviewer").style.display = 'none';
        document.getElementById("catpic").addEventListener('click', function () {
            octopus.upScore()
        })
    },
    render: function() {
        var cat = octopus.getCat();
        document.getElementById("catviewer").style.display = 'block';
        document.getElementById("catname").textContent = cat.name;
        document.getElementById("catpic").src = cat.imgURL;
        document.getElementById("attribution").innerHTML = cat.credit;
        document.getElementById("attribution").href = cat.creditURL;
        document.getElementById("catscore").innerHTML = cat.clicks.toString() + " Clicks";
        document.getElementById("admin").style.display = 'none';
    },
    showAdmin: function() {
        var cat = octopus.getCat();
        document.getElementById("admin").style.display = 'block';
        document.getElementById("Aname").value = cat.name;
        document.getElementById("AimgURL").value = cat.imgURL;
        document.getElementById("Acredit").value = cat.credit;
        document.getElementById("AcreditURL").value = cat.creditURL;
        document.getElementById("Aclicks").value = cat.clicks;
    }
};


var octopus = {
    init: function() {
        listView.init();
        catView.init();
        document.getElementById("adminButton").addEventListener("click", function() {
            catView.showAdmin()
        });
        document.getElementById("cancelAdmin").addEventListener("click", function() {
            catView.render(model.selectedCat)
        });
        document.getElementById("saveAdmin").addEventListener("click", function() {
            var cat = octopus.getCat();
            cat.name = document.getElementById("Aname").value;
            cat.imgURL = document.getElementById("AimgURL").value;
            cat.credit = document.getElementById("Acredit").value;
            cat.creditURL = document.getElementById("AcreditURL").value;
            cat.clicks = document.getElementById("Aclicks").value;
            catView.render(model.selectedCat);
            catView.showAdmin()
        })
    },
    getCats: function() {
        return model.cats
    },
    selectCat: function(CatNo) {
        model.selectedCat = CatNo
    },
    getCat: function() {
        return model.cats[model.selectedCat]
    },
    upScore: function() {
        octopus.getCat(model.selectedCat).clicks++;
        catView.render(model.selectedCat)
    }
};

octopus.init();