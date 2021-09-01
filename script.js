
const containerElement = document.getElementById('container');

// 1. Hämta count från datorns hårdskiva
//    och ändra om datan från string till integer
let count = parseInt(localStorage.getItem('count'));

// 2. Kontrollera så att count är ett tal
if(isNaN(count)) {
  count = 0;
}

// 3. Addera 1 till variabel count
count++;

// 4. Visa texten på skärmen
if(count == 1) {
  containerElement.textContent = `Du har besökt denna sida ${count} gång.`;
}
else {
  containerElement.textContent = `Du har besökt denna sida ${count} gånger.`;
}

// 5. Spara count till datorns hårdskiva
localStorage.setItem('count', count);



    
      