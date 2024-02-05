document.addEventListener('DOMContentLoaded', function () {
    const text = "LOREM IPSUM";
    let index = 0;
    const typewriterText = document.getElementById('typewriter-text');

    function type() {
        typewriterText.textContent = text.slice(0, index);
        index++;

        if (index <= text.length) {
            setTimeout(type, 100);
        }
    }

    type();
});
