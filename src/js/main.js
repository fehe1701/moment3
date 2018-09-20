var today = new Date();
var day = today.getDay(); // Skriver ut dagen från arrayen nedan
var daylist = ['Söndag','Måndag','Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];

// Funktion för att skriva ut dagens veckodag
var el = document.getElementById('footer');
el.innerHTML = '<p>Idag är det ' + daylist[day] + '</p>';