var abonnements = function() {
	document.getElementById('calculer').addEventListener('click', calculer);
}
window.addEventListener("load",abonnements);// lance la fonction abonnements après le chargement de ma page

var calculer = function(){
	resultat = document.getElementById('resultat');
	entreea =  document.getElementById('entreea').value;
	entreeb =  document.getElementById('entreeb').value;
	entreec =  document.getElementById('entreec').value;
	if(entreea != "" || entreea != 0){
		if(entreeb != "" || entreeb != 0){
			c =  Math.floor((Math.sqrt(Math.pow(entreea,2) + Math.pow(entreeb,2)) * 1000 )) / 1000;
			resultat.innerHTML =  "<b>C</b> vaut :<b>" + c + "</b> centimètre(cm)";
		}
		if(entreec != "" || entreec != 0){
			b =  Math.floor((Math.sqrt(Math.pow(entreec,2) - Math.pow(entreea,2)) * 1000 )) / 1000;
			resultat.innerHTML =  b;
		}
	} else if(entreec != "" || entreec != 0){
		if(entreeb != "" || entreeb != 0){
			a = Math.floor((Math.sqrt(Math.pow(entreec,2) - Math.pow(entreeb,2)) * 1000 )) / 1000;
			resultat.innerHTML =  a;
		}
	} else{
		resultat.innerHTML = "<span id='erreur'> Veuillez remplir 2 champs !</span>"
	}

}