document.querySelector('.main-container.support').style.maxHeight = window.innerHeight - 250 + 'px';
document.querySelector('.mail-container.support').style.maxHeight = window.innerHeight - 250 + 'px';

document.querySelector('.popup__support .popup-close').onclick = () => {
    document.querySelector('.popup-wrapper.pS').classList.remove('active')
    document.querySelector('.mail-container.support').classList.add('hidden')
    document.querySelector('.main-container.support').classList.remove('hidden')
    document.body.style.overflowY = 'auto'
}

document.querySelector('.popup__support-opener').onclick = () => {
    document.querySelector('.popup-wrapper.pS').classList.add('active')
    document.body.style.overflow = 'hidden'
}

document.querySelector('.open-mail').onclick = () => {
    document.querySelector('.mail-container.support').classList.remove('hidden')
    document.querySelector('.main-container.support').classList.add('hidden')
}

let phoneMask = IMask(
    document.getElementById('phone-mask'), {
        mask: '+{7} (000) 000-00-00'
    }
);

let emailMask = IMask(
    document.getElementById('email-mask'), {
        mask: /^\S*@?\S*$/
    }
);