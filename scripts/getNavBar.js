document.addEventListener("DOMContentLoaded", function () {
    fetch('../components/nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.nav-placeholder').innerHTML = data;
            console.log(data)
        })
        .catch(error => console.error('Error loading navbar:', error));
});