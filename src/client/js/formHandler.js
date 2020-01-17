function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let url = document.getElementById('url').value;
  if (Client.checkURL(url)) {
    post('http://localhost:8081/save', url)
} else {
    document.getElementById('inv').innerHTML = "Invalid URL";
  }
}

const post = async (path, Url) => {
  await fetch(path, {
    method: 'POST',
    cache: 'no-cache', 
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body: JSON.stringify({text: Url})
      })
      .then(res => {
        console.log(res)
        return res.json();
      })
      .then((res) => {         
        document.getElementById('polarity').innerHTML = "Polarity: " + res.polarity;
        document.getElementById('confidence').innerHTML = "Confidence: " + res.polarity_confidence.toFixed(2);
      }
      )}

export { handleSubmit }
