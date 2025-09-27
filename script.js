document.addEventListener("contextmenu", (e) => e.preventDefault());
function blockEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}
document.addEventListener('copy', function (e) {
    if (e.target.closest && e.target.closest('.allow-select')) return;
    blockEvent(e);
}, true);
document.addEventListener('cut', function (e) {
    if (e.target.closest && e.target.closest('.allow-select')) return;
    blockEvent(e);
}, true);
document.addEventListener('paste', function (e) {
    if (e.target.closest && e.target.closest('.allow-select')) return;
    blockEvent(e);
}, true);
document.addEventListener('selectstart', function (e) {
    if (e.target.closest && e.target.closest('.allow-select')) return;
    blockEvent(e);
}, true);
document.addEventListener('dragstart', function (e) {
    if (e.target.closest && e.target.closest('.allow-select')) return;
    blockEvent(e);
}, true);
document.addEventListener('contextmenu', function (e) {
    if (e.target.closest && e.target.closest('.allow-select')) return;
    blockEvent(e);
}, true);
document.addEventListener('keydown', function (e) {
    if (e.target.closest && e.target.closest('.allow-select')) return;
    const key = e.key.toLowerCase();
    if ((e.ctrlKey || e.metaKey) && (key === 'c' || key === 'v' || key === 'x' || key === 'a' || key === 's' || key === 'p')) {
        blockEvent(e);
        return false;
    }
    if (e.key === 'F12') {
        blockEvent(e);
        return false;
    }
    if (e.ctrlKey && e.shiftKey && key === 'i') {
        blockEvent(e);
        return false;
    }
}, true);