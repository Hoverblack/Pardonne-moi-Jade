function afficherSection() {
    document.querySelector('.verite').style.display = 'block';
    document.querySelector('.changement').style.display = 'block';
    document.querySelector('.pardon').style.display = 'block';
    window.scrollBy(0, window.innerHeight);
}

function reponseOui() {
    document.getElementById('reponseMessage').innerText = "Merci mon amour, je ferai tout pour honorer ta confiance. 💕";
}

function reponseReflechir() {
    document.getElementById('reponseMessage').innerText = "Je comprends, prends tout ton temps. Je serai là pour toi. 🌸";
}
//document.querySelector('.lettre').style.display = 'block';

//document.querySelector('.lettre').classList.add('show');

function afficherLettre() {
    const section = document.getElementById('maLettre');
    section.style.display = 'block';
    setTimeout(() => {
        section.classList.add('show');
        section.scrollIntoView({ behavior: 'smooth' });

        // ➕ Montre le bouton photo à la fin de la lettre
        document.getElementById('btnPhotoContainer').style.display = 'block';
    }, 10);
}

function afficherPhoto() {
    const photo = document.getElementById('photoSection');
    photo.style.display = 'block';
    setTimeout(() => {
        photo.classList.add('show');
        photo.scrollIntoView({ behavior: 'smooth' });
    }, 10);
}
