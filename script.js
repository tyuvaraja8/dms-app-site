async function requestDownload(filename){
    const password = document.getElementById("password").value;
    const res = await fetch("https://dms-site-app-worker.tyuvaraja8.workers.dev/", {
        method: 'POST',
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify({password, file:filename})
    });

    if (res.status !== 200){
        document.getElementById('error').textContent = 'Incorrect password.';
    }

    if (res.status == 200){
        document.getElementById('error').textContent = '';
    }

    const data = await res.json();
    window.location.href = data.url;
}