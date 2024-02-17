
var paragraphs = document.querySelectorAll('p');
var originalStyles = [];

paragraphs.forEach(function (paragraph) {
    originalStyles.push({
        color: paragraph.style.color,
        transform: paragraph.style.transform
    });
});

document.getElementById('colorButton').addEventListener('click', function () {
    paragraphs.forEach(function (paragraph) {
        paragraph.style.color = getRandomColor();
        paragraph.classList.add('animate-text');
    });
});
document.getElementById('moveButton').addEventListener('click', function () {
    paragraphs.forEach(function (paragraph) {
        paragraph.style.transform = 'rotate(10deg)';
    });
});

document.getElementById('resetButton').addEventListener('click', function () {
    paragraphs.forEach(function (paragraph, index) {
        paragraph.style.color = originalStyles[index].color;
        paragraph.style.transform = originalStyles[index].transform;
        paragraph.classList.remove('animate-text');
    });
});
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
