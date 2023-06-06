/* Ev tapşırığı:

1) Bütün reklam şəkillərini silin (saytın sağ tərəfində)

2) Filmin janrını "Komediya"-dan на "Drama" -ya dəyişin
Posterin arxa fon şəkilini "bg.jpg" ilə dəyişin. Şəkil "img" qovluğunda yerləşir. Bunun üçün ancaq JS-dən istifadə edin.

4) Baxılmış kinoların siyahısını JS ilə silin, əlifbaya görə sıralayın.

5) "movieDB"-də olan kino adları ilə əvəz edirik (stili HTML-dən götürün) və əlavə edilmiş kino adları nömrələnsin */

'use strict';

const reklam = document.querySelectorAll('.promo__adv img');
const janr  = document.querySelector('.promo__genre');
const bgImage  = document.querySelector('.promo__bg');
const movieDB = {
    movies: [
        "logan",
        "titanic",
        "Bəyin oğurlanması",
        "Xaç atası",
        "Avatar 2"
    ]
};
movieDB.movies.sort()
reklam.forEach(item => {
    item.remove()
});
janr.textContent = 'drama';

bgImage.style.backgroundImage = 'url(elmual/img/bg.jpg)'

kinolar.innerHTML = '';

movieDB.movies.sort();


movieDB.movies.forEach((kino, i) => {
    kinolar.innerHTML += `
 
       
            <li class="promo__interactive-item">Logan
                <div class="delete"></div>
            </li> `
        })