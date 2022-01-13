export function handleSubmit(event) {
  event.preventDefault();

  // get text that was put into the form field
  let url = document.getElementById('url').value;

  // validate url
  if (Client.validateUrl(url)) {
    event.target.value = 'Please wait';

    const formData = {url}

    fetch('/api', {
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
      const wrapper = document.querySelector('.main__result');
      wrapper.classList.add('active');
      const resultContainer = document.getElementById('result');
      let listItem = '';
      listItem += `<li><p>Agreement</p> <p>${agreement}</p></li>`;
      listItem += `<li><p>Confidence</p> <p>${confidence}</p></li>`;
      listItem += `<li><p>Irony</p> <p>${irony}</p></li>`;
      listItem += `<li><p>Model</p> <p>${model}</p></li>`;
      listItem += `<li><p>Subjectivity</p> <p>${subjectivity}</p></li>`;
      resultContainer.innerHTML = listItem;
    });
  } else {
    // TODO: show error message.
  }
}