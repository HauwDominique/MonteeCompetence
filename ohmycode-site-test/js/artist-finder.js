const result = document.getElementById('result');
const refresh = document.getElementById('refresh');

async function getImg() {
    try {
    //    ici fetch
        const responseJson = await fetch("https://api.unsplash.com/photos/random/?client_id=3HL3vxkl4iQSMalGX5yFvAMrobVq2TIcKOadeOGJ-lk");
        const responseJS = await responseJson.json();
        console.log(responseJS);

        if(responseJson === undefined || responseJson === null) {
            console.log('undefined');
        }

        result.innerHTML = `
                            <img class="img-artist" src="${responseJS.urls.small}" alt="${responseJS.description}"/>
                            <h2 class="artist">Artiste : ${responseJS.user.name}</h2>
                            <p>Découvrir son univers : 
                                ${responseJS.user.bio ? responseJS.user.bio : "Désolé, information manquante !"}</p>
                            <div class="btn">
                                <a href="https://instagram.com/${responseJS.user.instagram_username}" class="btn-insta">
                                    Je découvre son instagram
                                </a>
                            </div>
    `;

    }
    catch (e) {
        console.log(e);
    };
}

getImg();

refresh.addEventListener('click', function () {
    getImg();
})