/**
 * Appel des données et initialisation des fromages
 */
var xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange',function(e){
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
        console.log(JSON.parse(e.currentTarget.response));
        var fromages = new Fromages(JSON.parse(e.currentTarget.response));

    }
});
xhr.open("get", "modele/fromages.json", true);
xhr.send();