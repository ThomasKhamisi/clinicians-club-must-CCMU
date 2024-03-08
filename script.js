

// Function to load content into the main-content section based on the clicked link
function loadContent(page) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main-content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", page, true);
    xhttp.send();
}

// Welcome message on page load
document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to clinicians club of meru university!");
});

// Fetch the list of uploaded files and display them
fetch('/list-files')
    .then(response => response.json())
    .then(data => {
        const fileList = document.getElementById('fileList');
        data.files.forEach(file => {
            const listItem = document.createElement('li');
            listItem.textContent = file;
            fileList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching file list:', error));
