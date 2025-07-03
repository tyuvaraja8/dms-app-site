async function requestDownload(filename) {
  const password = document.getElementById("password").value;
  const errorEl = document.getElementById("error");

  if (!password) {
    errorEl.textContent = "Please enter a password.";
    return;
  }

  const res = await fetch("https://dms-site-app-worker.tyuvaraja8.workers.dev/", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password, file: filename })
  });

  if (res.status === 403) {
    errorEl.textContent = "Incorrect password.";
    return;
  }

  if (res.status === 404) {
    errorEl.textContent = "Requested file not found.";
    return;
  }

  if (res.status !== 200) {
    errorEl.textContent = "Something went wrong.";
    return;
  }

  errorEl.textContent = ""; 

  const data = await res.json();

  const link = document.createElement('a');
  link.href = data.url;
  link.download = filename; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

