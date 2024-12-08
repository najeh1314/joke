const happyLabelEl = document.getElementById("happyLabel");
const amourLabelEl = document.getElementById("amourLabel");

const amour = document.querySelector('input[name="amour"]:checked');
const tenderness = document.getElementById('tenderness').value;
const happy = document.querySelector('input[name="happy"]:checked');
const isConfirmed = document.getElementById('confirmCheck').checked;
const btnSubmittEl = document.getElementById("btnValidate");

// Action sur le bouton "Valider" lorsqu'il est cliqué
btnSubmittEl.addEventListener('click', () => {
    const amour = document.querySelector('input[name="amour"]:checked'); // Rechercher ici à chaque clic
    const tenderness = document.getElementById('tenderness').value;
    const happy = document.querySelector('input[name="happy"]:checked');
    const isConfirmed = document.getElementById('confirmCheck').checked;

    amourLabelEl.style.visibility = 'hidden';
    // Vérifier si "amour"  n'estpas null
    if (!amour) {
        console.log('Veuillez répondre à toutes les questions.');
        amourLabelEl.style.visibility = 'visible'; 
        return;
    }
    happyLabelEl.style.visibility = 'hidden';
    // Vérifier si "happy" n'est pas null
    if (!happy) {
        console.log('Veuillez répondre à toutes les questions.');
        happyLabelEl.style.visibility = 'visible'; 
        return;
    }
});

btnSubmittEl.onmouseover = () => {
    const amour = document.querySelector('input[name="amour"]:checked');
    const tenderness = document.getElementById('tenderness');
    const happy = document.querySelector('input[name="happy"]:checked');
    const isConfirmed = document.getElementById('confirmCheck').checked;
        // Vérifier si "amour"  n'estpas null
        if (!amour) {
            return;
        }
        // Vérifier si "happy" n'est pas null
        if (!happy) {
            return;
        }
        // Vérifier si "confirmed is checked" n'est pas null
        if (!isConfirmed) {
            return;
        }
    let moveBtn = (amour.value != 10 || tenderness.value != 'very-high' || happy.value != 'yes');
    if (moveBtn){
        moveButtonRandomly(divToMomve);
        badAnswerEl.style.visibility = 'visible';
    // Attendre 2 secondes (2000 ms) avant de cacher l'élément
    setTimeout(() => {
        badAnswerEl.style.visibility = 'hidden';
    }, 2000);

    }

}


// Déplacer le bouton à une position aléatoire
function moveButtonRandomly(button) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - button.offsetWidth;
    const maxY = containerRect.height - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}