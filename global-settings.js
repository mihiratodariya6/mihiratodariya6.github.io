// global-settings.js
// આ કોડ પેજ લોડ થતા જ ચેક કરશે કે યુઝરે ડાર્ક મોડ ઓન કર્યો છે કે નહિ.
document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Check
    if (localStorage.getItem('toolmitra_darkmode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    // Animation Check
    if (localStorage.getItem('toolmitra_nomotion') === 'true') {
        document.body.classList.add('no-motion');
    }
});