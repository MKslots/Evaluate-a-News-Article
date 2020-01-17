function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let url = document.getElementById('url').value
  post('http://localhost:8081/save', url)
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
        document.getElementById('polarity').innerHTML = '<strong>Polarity: </strong>' + res.polarity;
        document.getElementById('confidence').innerHTML = '<strong>Polarity Confidence: </strong>' + res.polarity_confidence.toFixed(2);
      }
)}

export { handleSubmit }
