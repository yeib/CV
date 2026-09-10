function cvApp() {
    return {
        lang: localStorage.getItem('cv_lang') || 'es',
        data() {
            return cvData[this.lang];
        },
        setLang(l) {
            this.lang = l;
            localStorage.setItem('cv_lang', l);
        }
    }
}
