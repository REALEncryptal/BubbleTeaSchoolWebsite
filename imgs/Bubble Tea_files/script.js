// look for <a class="drink"> and check if it contains <h3>COLD</h3>

const drinks = document.getElementsByClassName('drink');

Array.from(drinks).forEach(function(drink) {
    const title = drink.querySelector('h3');
    if(title.textContent === 'COLD') {
        // add <div class="splash"><img src="imgs/splash.png" alt=""></div>
        const splash = document.createElement('div');
        splash.classList.add('splash');
        splash.innerHTML = '<img src="imgs/splash.png" alt="">';
        //drink.appendChild(splash);
    }
})