
import en_us from './en'
import fa_ir from './fa';

const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
export {lang}

const direction = {
    fa: 'rtl',
    en: 'ltr'
}
function getDirection()  {
    return direction [lang]

}
export {getDirection}
const fonts={
    fa:"IRANSans",
    en:"Playfair Display"
}
function getfont() {
    return fonts[lang]

}
export {getfont}

const translate = {
    en:en_us,
    fa:fa_ir

}
function getTranslate() {
    return translate[lang]
}
export {getTranslate}

function changeLanguage(newLang){
    if (newLang === lang) {
        return
    }
    localStorage.setItem('lang', newLang)
    window.location.reload()
}
export {changeLanguage}