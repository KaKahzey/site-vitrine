//variables utilisées partout
let body = document.getElementById("body")
let banniere = document.querySelector("#banner")
//afficher la page Best
let afficherBest = () => {
    if(banniere.nextElementSibling.id == "lesJeux"){
        banniere.nextElementSibling.remove()
  }
    body.innerHTML = affichageBest
}
let boutonBest = document.getElementById("afficherBest")
boutonBest.addEventListener("click", afficherBest)


//afficher panier
let afficherPanier = () =>{
    if(banniere.nextElementSibling.id == "lesJeux"){
        banniere.nextElementSibling.remove()
    }
    body.innerHTML = panierJeu
    let personnages = Array.from(document.getElementsByClassName("personnages"))
    let zones = document.getElementsByClassName("zones")
    personnages.forEach((e) =>{
        e.addEventListener("dragstart", function(e) {
        e.dataTransfer.setData("text/plain", e.target.id)
    })
    })
    for (let i = 0; i < zones.length; i++) {
        zones[i].addEventListener("dragover", function(e) {
            e.preventDefault()
      })
        zones[i].addEventListener("drop", function(e) {
            let enCours = e.dataTransfer.getData("text/plain")
            let volant = document.getElementById(enCours)
            zones[i].appendChild(volant)
      })
    }
}
let boutonPanier = document.getElementById("panierJeu")
boutonPanier.addEventListener("click", afficherPanier)


//afficher les 2 jeux 
let afficherJeux = () =>{
    if(banniere.nextElementSibling.id != "lesJeux"){
        let section = document.createElement("section")
        section.id = "lesJeux"
        section.innerHTML = affichageJeux
        banniere.insertAdjacentElement("afterEnd", section)
    }
    body.innerHTML = ""
    let boutonSOT = document.getElementById("sotArticle")
    boutonSOT.addEventListener("click", afficherSOTArticle)
    let boutonFBW = document.getElementById("fbwArticle")
    boutonFBW.addEventListener("click", afficherFBWArticle)
}
let boutonJeux = document.getElementById("afficherJeux")
boutonJeux.addEventListener("click", afficherJeux)


//afficher la page "steam" du jeu stick of truth
let afficherSOTArticle = () => {
    body.innerHTML = sotArticle
    let elements = document.querySelectorAll(".affiche")
    let elementAgrandi = document.querySelector("#elementAgrandi")
    elements.forEach((e) => {
        e.addEventListener("click", () => {
            let type = e.tagName
            let selection = e.getAttribute("src")
            if(type == "IMG"){
                elementAgrandi.innerHTML = `<img src="` + selection + `"class="elementAgrandi" alt="image"/>`
            }
            else{
                elementAgrandi.innerHTML = `<video src="` + selection + `" class="elementAgrandi" alt="videoJeu" autoplay controls></video>`
            }
            
        })
    })
}


//afficher la page "steam" du jeu fractured but whole
let afficherFBWArticle = () => {
    body.innerHTML = fbwArticle
    let elements = document.querySelectorAll(".affiche")
    let elementAgrandi = document.querySelector("#elementAgrandi")
    elements.forEach((e) => {
        e.addEventListener("click", () => {
            let type = e.tagName
            let selection = e.getAttribute("src")
            if(type == "IMG"){
                elementAgrandi.innerHTML = `<img src="` + selection + `"class="elementAgrandi" alt="image"/>`
            }
            else{
                elementAgrandi.innerHTML = `<video src="` + selection + `" class="elementAgrandi" alt="videoJeu" autoplay controls></video>`
            }
            
        })
    })
}


//afficher la page rassemblant les différents articles
let afficherNews = () => {
    if(banniere.nextElementSibling.id == "lesJeux"){
        banniere.nextElementSibling.remove()
    }
    body.innerHTML = news
    let boutonNews1 = document.getElementById("news1")
    boutonNews1.addEventListener("click", () => {afficherNewsArticle(1)})
    let boutonNews2 = document.getElementById("news2")
    boutonNews2.addEventListener("click", () => {afficherNewsArticle(2)})
    let boutonNews3 = document.getElementById("news3")
    boutonNews3.addEventListener("click", () => {afficherNewsArticle(3)})
    let boutonNews4 = document.getElementById("news4")
    boutonNews4.addEventListener("click", () => {afficherNewsArticle(1)})
    let boutonNews5 = document.getElementById("news5")
    boutonNews5.addEventListener("click", () => {afficherNewsArticle(1)})
    let boutonNews6 = document.getElementById("news6")
    boutonNews6.addEventListener("click", () => {afficherNewsArticle(1)})
}
let boutonNews = document.getElementById("afficherNews")
boutonNews.addEventListener("click", afficherNews)


//fonction réutilisée qui affiche l'article équivalent au numéro entré
let afficherNewsArticle = (num) => {
    switch(num){
        case 1:
            body.innerHTML = news1
            break;
        case 2:
            body.innerHTML = news2
            break;
        case 3:
            body.innerHTML = news3
            break;
        case 4:
            body.innerHTML = news4
            break;
        case 5:
            body.innerHTML = news5
            break;
        case 6:
            body.innerHTML = news6
            break;       
    }
    let boutonNews = document.getElementById("revenirNews")
    boutonNews.addEventListener("click", afficherNews)
}

//afficher la page du formulaire
let afficherQuestions = () =>{
    if(banniere.nextElementSibling.id == "lesJeux"){
        banniere.nextElementSibling.remove()
    }
    body.innerHTML = questions
    submit.addEventListener("click", recolterInfos)
}
let boutonQuestion = document.getElementById("afficherQuestions")
boutonQuestion.addEventListener("click", afficherQuestions)

//localStorage.clear()
//stockage formulaire
let recolterInfos = () =>{
    let avis = document.getElementById("avis").value
    let note = document.getElementById("note").value
    let message = document.getElementById("message")
    let submit = document.getElementById("submit")
    
    let users
    let moyenne = 0
    if(avis && note){
        if(!localStorage.getItem("users")){
            users = []
        }
        else{
            users = JSON.parse(localStorage.getItem("users"))
        }
        let newUser = {
            note: note,
            avis: avis
        }
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        users.forEach((e) =>{
            moyenne += JSON.parse(e.note)
        })
        document.getElementById("avis").value = ""
        document.getElementById("note").value = ""
        message.innerHTML = "<p>sur " + users.length + " utilisateurs, la moyenne des notes est de " + (moyenne / users.length).toFixed(1) + " /10!"
    }
    else{
        alert("remplisser les champs correctement")
    }
    
}



//foutre
let affichageBest = `<table id="corps">
<tr>
    <td class="titres" colspan="2">
        <h2>BEST</h2>
    </td>
</tr>
<tr>
    <td>
        <img src="images/tears.PNG" class="episodes"/>
    </td>
    <td>
        <h3>Scott Tenorman doit mourir</h3>
        <p>
            &nbsp Cartman se fait duper par Scott Tenorman, qui lui vend ses propres poils pubiens. 
            Humilié, Cartman décide de se venger et monte un plan diabolique : il organise un faux concert de Radiohead pour attirer Scott, 
            puis lui révèle qu'il a fait manger à ce dernier un chili préparé à partir des restes de ses parents. 
            Cartman triomphe, laissant Scott dévasté par cette vengeance cruelle.
        </p>
    </td>
</tr>
<tr>
    <td><img src="images/war.png" class="episodes"/></td>
    <td>
        <h3>Make Love, Not Warcraft</h3>
        <p>
            &nbsp Les personnages de South Park se retrouvent complètement absorbés par le jeu en ligne World of Warcraft.
            Alors que les joueurs passent des heures devant leurs ordinateurs, un joueur très puissant nommé Jenkins terrorise le monde virtuel
            et tue tous ceux qui se dressent sur son chemin. Stan, Kyle, Cartman et Kenny décident de former une équipe pour le vaincre.
            Avec l'aide d'un joueur expérimenté, ils se lancent dans une quête épique pour arrêter Jenkins.
            Finalement, grâce à une ruse ingénieuse et à leur détermination, ils parviennent à le vaincre et à sauver World of Warcraft.
            L'épisode se termine par une critique humoristique de l'obsession des jeux vidéo et de la culture des joueurs en ligne.
        </p>
    </td>
</tr>
<tr>
    <td><img src="images/tourette.png" class="episodes"/></td>
    <td>
        <h3>Le Petit Tourette</h3>
        <p>
            &nbsp Cartman prétend avoir le syndrome de Tourette, un trouble qui provoque des tics involontaires et des comportements inappropriés.
            Grâce à cette prétendue condition, il est capable de dire ce qu'il veut sans être réprimandé.
            Cependant, lorsqu'il est confronté à des personnes réellement atteintes de la maladie,
            il réalise l'impact réel et les difficultés qu'elles rencontrent. Pendant ce temps, Stan rencontre un garçon nommé Thomas qui,
            malgré sa maladie, se montre gentil et attentionné. Cet épisode aborde la question de la censure,
            de la sensibilité et de l'exploitation des troubles médicaux à des fins égoïstes,
            tout en offrant une réflexion sur l'empathie et la compréhension envers les autres.
        </p>
    </td>
</tr>
</table>`

let affichageJeux= `<table width="100%">
    <tr >
        <td colspan="2" align="center"><h2>SEULEMENT <span id="deux">2</span> JEUX</h2></td>
    </tr>
    <tr>
        <td align="center"> 
            <figure>
                <button id="sotArticle"><img src="images/sotAffiche.jpg"/></button>
                <figcaption>THE STICK OF TRUTH</figcaption>
            </figure>
        </td>
        <td align="center">
            <figure>
                <button id="fbwArticle"><img src="images/fbwAffiche.jpg"/></button>
                <figcaption>THE FRACTURED BUT WHOLE</figcaption>
            </figure>
        </td>
    </tr>
</table>
</section>`

let sotArticle = `<div id="galerie" class="steam-style">
<h3>South Park™: The Stick of Truth™</h3>
<div id="elementAgrandi">
    <img src="images/sot1.jpg" alt="sot1" class="affiche" />
</div>
<div id="barre">
    <div class="media">
        <video src="videos/stickOfTruth.mp4" class="affiche"></video>
        <img src="images/sot1.jpg" alt="sot1" class="affiche" />
        <img src="images/sot2.jpg" alt="sot2" class="affiche" />
        <img src="images/sot3.jpg" alt="sot3" class="affiche" />
        <img src="images/sot4.jpg" alt="sot4" class="affiche" />
        <img src="images/sot5.jpg" alt="sot5" class="affiche" />
    </div>
</div>
</div>
<div id="details">
<img src="images/sotAffiche.jpg" alt="sot affiche"/>
<p>
    Du dangereux champ de bataille qu'est la cour de récréation des CM1, un jeune héros s'éveillera.
    Son destin ? Devenir le sauveur de South Park. Avec le jeu vidéo South Park™ : Le Bâton de la Vérité ,
    embarque dans une quête épique pour devenir… cool. Depuis des milliers d'années, la guerre fait 
</p>
<p>
    évaluations utilisateurs : <span class="enBleu survol">extrêmement positives</span> <span class="enGris">(44 734)</span>
</p>
<p>
    Date de parution : <span class="enGris">6 mars 2014</span>
</p>
<p>
    Développement : <span class="enBleu"><a href="https://www.obsidian.net/">Obsidian Entertainment</a></span><br/>
    Édition : <span class="enBleu"><a href="https://www.ubisoft.com/fr-fr/">Ubisoft</a></span>
</p>
</div>`

let fbwArticle = `<div id="galerie" class="steam-style">
<h3>South Park™: The Fractured But Whole™</h3>
<div id="elementAgrandi">
    <img src="images/fbw1.jpg" alt="fbw1" class="affiche" />
</div>
<div id="barre">
    <div class="media">
        <video src="videos/fracturedButWhole.mp4" class="affiche"></video>
        <img src="images/fbw1.jpg" alt="fbw1" class="affiche" />
        <img src="images/fbw2.jpg" alt="fbw2" class="affiche" />
        <img src="images/fbw3.jpg" alt="fbw3" class="affiche" />
        <img src="images/fbw4.jpg" alt="fbw4" class="affiche" />
        <img src="images/fbw5.jpg" alt="fbw5" class="affiche" />
    </div>
</div>
</div>
<div id="details">
<img src="images/fbwAffiche.jpg" alt="fbw affiche"/>
<p>
    Les créateurs de South Park, Trey Parker et Matt Stone, sont en passe d'accoucher de South Park :
    L'annale du destin, qui fait suite à South Park : Le Bâton de la Vérité, primé en 2014. 
</p>
<p>
    évaluations utilisateurs : <span class="enBleu survol2">très positives</span> <span class="enGris">(20 858)</span>
</p>
<p>
    Date de parution : <span class="enGris">16 oct. 2017</span>
</p>
<p>
    Développement : <span class="enBleu"><a href="https://www.ubisoft.com/fr-fr/">Ubisoft San Francisco</a></span><br/>
    Édition : <span class="enBleu"><a href="https://www.ubisoft.com/fr-fr/">Ubisoft</a></span>
</p>
</div>`

let news = `<section id="news">
<table width="100%">
    <tr>
        <td>
            <figure>
                <figcaption>Les astuces de TIMMY pour l'été</figcaption><button id="news1"><img src="images/news1.jpg"/></button>
            </figure>
        </td>
        <td>
            <figure>
                <figcaption>Sheila nous dit tout</figcaption><button id="news2"><img src="images/news2.jpg"/></button>
            </figure>
        </td>
        <td>
            <figure>
                <figcaption>Le cannabis pour maigrir?</figcaption><button id="news3"><img src="images/news3.jpg"/></button>
            </figure>
        </td>
    </tr>
    <tr>
        <td>
            <figure>
                <figcaption>C'est mieux dehors que dedans</figcaption><button id="news4"><img src="images/news4.jpg"/></button>
            </figure>
        </td>
        <td>
            <figure>
                <figcaption>Es-tu un sombre connard?</figcaption><button id="news5"><img src="images/news5.jpg"/></button>
            </figure>
        </td>
        <td>
            <figure>
                <figcaption>Pourquoi vivre si la mort?</figcaption><button id="news6"><img src="images/news6.jpg"/></button>
            </figure>
        </td>
    </tr>
</table>
</section>`

let news1 = `<section>
<h2>Les astuces de TIMMY pour l'été</h2>
<p>
    Timmy Timmy Timmy Timmy Timmy Timmy. TIMMY! Timmy Timmy Timmy, TIMMY Timmy Timmy. Timmy, TIMMY? Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy. TIMMY! Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
</p>
<p>
    <button id="revenirNews"><h2>Revenir à la liste d'articles</h2></button>
</p>
</section>`

let news2 = `<section>
<h2>Sheila nous dit tout</h2>
<p>
    &nbsp Blablabla blablabla blablabla blablabla. Blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla.
    Blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla.
</p>
<p>
    &nbsp Blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla.
    Blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla.
</p>
<p>
    &nbsp Blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla.
    Blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla.
</p>
<p>
    <button id="revenirNews"><h2>Revenir à la liste d'articles</h2></button>
</p>
</section>`

let news3 = `<section>
<h2>Les astuces de TIMMY pour l'été</h2>
<p>
    Eh mec, tu sais, se droguer pour perdre du poids, c'est vraiment une super idée!
    Je veux dire, pourquoi se soucier de manger sainement et de faire de l'exercice quand tu peux juste te défoncer,
    tu vois ? Les drogues, elles te coupent l'appétit, donc tu peux sauter les repas et perdre du poids rapidement.
    Et puis, quand tu es stone, tu oublies tout simplement que tu as envie de grignoter, donc pas de tentation, mec !
</p>
<p>
    <button id="revenirNews"><h2>Revenir à la liste d'articles</h2></button>
</p>
</section>`

let news4 = `<section>
<h2>Les astuces de TIMMY pour l'été</h2>
<p>
    Timmy Timmy Timmy Timmy Timmy Timmy. TIMMY! Timmy Timmy Timmy, TIMMY Timmy Timmy. Timmy, TIMMY? Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy. TIMMY! Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
</p>
<p>
    <button id="revenirNews"><h2>Revenir à la liste d'articles</h2></button>
</p>
</section>`

let news5 = `<section>
<h2>Les astuces de TIMMY pour l'été</h2>
<p>
    Timmy Timmy Timmy Timmy Timmy Timmy. TIMMY! Timmy Timmy Timmy, TIMMY Timmy Timmy. Timmy, TIMMY? Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy. TIMMY! Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
</p>
<p>
    <button id="revenirNews"><h2>Revenir à la liste d'articles</h2></button>
</p>
</section>`

let news6 = `<section>
<h2>Les astuces de TIMMY pour l'été</h2>
<p>
    Timmy Timmy Timmy Timmy Timmy Timmy. TIMMY! Timmy Timmy Timmy, TIMMY Timmy Timmy. Timmy, TIMMY? Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy. TIMMY! Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
    Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy Timmy
</p>
<p>
    <button id="revenirNews"><h2>Revenir à la liste d'articles</h2></button>
</p>
</section>`

let questions = `<form name="formulaire" onsubmit="return false">
<label for="avis">Qu'avez-vous pensé de ce site?</label>
<input name="avis" id="avis" type="text" placeholder="C'était chouette"><br/>
<label for="note">Note sur 10</label>
<input name="note" id="note" type="number" placeholder="10" max="10" min="1"><br/>
<button id="submit">STOCKER A JAMAIS DANS NOS ENORMES SERVEURS</button>
<div id="message"></div>
</form>`

let panierJeu = `<section id="zoneJeu">
<div id="start" class="zones">
<img src="images/cartman1.PNG" id="cartman" class="personnages" draggable="true">
<img src="images/kenny.PNG" id="kenny" class="personnages" draggable="true">
<img src="images/stan.PNG" id="stan" class="personnages" draggable="true">
<img src="images/kyle.PNG" id="kyle" class="personnages" draggable="true">
</div>
<div id="panier" class="zones">
<img src="images/panier.png" alt="Panier" id="panier-image">
</div>
</section>`