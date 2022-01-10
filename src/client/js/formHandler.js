export function handleSubmit(event) {
  event.preventDefault();

  // get text that was put into the form field
  let url = document.getElementById('url').value;

  // validate url
  if (Client.validateUrl(url)) {
    event.target.value = 'Please wait';

    const formData = {url}

    fetch('http://localhost:8080/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      const {agreement, confidence, irony, model, subjectivity} = res;
      const resultContainer = document.getElementById('result');
      console.log(res)
      // const paragraph = document.createElement('p');
      // paragraph.innerHTML = `Agreement: ${agreement} <br/> Confidence: ${confidence} <br/> Irony: ${irony} <br/> Model: ${model} <br/> Subjectivity: ${subjectivity}`
      // formResultsContainer.appendChild(paragraph);
    });
  } else {
    // TODO: show error message.
  }
}