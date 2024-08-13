document.addEventListener("DOMContentLoaded", function () {
    fetch('../components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.footer-placeholder').innerHTML = data;
            console.log(data)
        })
        .catch(error => console.error('Error loading footer:', error));
});