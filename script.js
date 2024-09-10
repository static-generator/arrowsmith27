document.getElementById('toggleButton').addEventListener('click', function() {
    var box = document.getElementById('box');
    if (box.classList.contains('small')) {
        box.classList.remove('small');
        box.classList.add('large');
    } else {
        box.classList.remove('large');
        box.classList.add('small');
    }
});
