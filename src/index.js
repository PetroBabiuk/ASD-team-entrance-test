import './sass/main.scss';

const refs = {
    ScreenSaverWindow: document.querySelector('.window'),
    imageList: document.querySelector('.image-list'),
    listElements: document.querySelectorAll('.image-list-item'),
    body: document.body,
    settingsButton: document.querySelector('.settings'),
    timePlaceholder: document.querySelector('.time-placeholder'),
    searhButton: document.querySelector('.search-button'),
}

refs.imageList.addEventListener('click', onImageListClick);
refs.settingsButton.addEventListener('click', onSettingsClick);
refs.searhButton.addEventListener('click', (e) => e.preventDefault());

function onImageListClick(e) {
    const nodeName = e.target.nodeName;

    refs.listElements.forEach(element => {
        element.classList.remove('current');
    });

    if (nodeName === 'IMG') {
        e.target.parentNode.classList.add('current');
        refs.body.style.backgroundImage = `url(${e.target.src})`;
    }
    
    if (nodeName === 'LI') {
        e.target.classList.add('current');
        const imageSrc = e.target.children[0].src;
        refs.body.style.backgroundImage = `url(${imageSrc})`;
    }
}

function onSettingsClick() {
    refs.ScreenSaverWindow.classList.toggle('visually-hidden')
}

function currentTime() {
    const date = new Date();
    const month = date.getMonth();
    const dayOfWeek = date.getDay();
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const updatedHour = updateTime(hour);
    const updatedMin = updateTime(min);
    const updatedSec = updateTime(sec);
    const updatedDayOfWeek = updateDayOfWeek(dayOfWeek);
    const updatedMonth = updateMonth(month);
    refs.timePlaceholder.innerHTML = `${updatedDayOfWeek} ${day} ${updatedMonth} ${updatedHour}:${updatedMin}:${updatedSec}`;
    const t = setTimeout(currentTime, 1000);
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

function updateDayOfWeek(day) {
    switch (day) {
        case 1:
            return 'Mon';
        case 2:
            return 'Tue';        
        case 3:
            return 'Wed';
        case 4:
            return 'Thu';
        case 5:
            return 'Fri';
        case 6:
            return 'Sat';
        case 7:
            return 'Sun';
        default:
            break;
    }
}

function updateMonth(month) {
    switch (month) {
        case 0:
            return 'Jan';
        case 1:
            return 'Feb';
        case 2:
            return 'Mar';
        case 3:
            return 'Apr';
        case 4:
            return 'May';
        case 5:
            return 'Jun';
        case 6:
            return 'Jul';
        case 7:
            return 'Aug';
        case 8:
            return 'Sep';
        case 9:
            return 'Oct';
        case 10:
            return 'Nov';
        case 11:
            return 'Dec';
        default:
            break;
    }
}

currentTime();