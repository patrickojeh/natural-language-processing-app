export function handleSubmit(event) {
  event.preventDefault();

  // get text that was put into the form field
  let url = document.getElementById('url').value;

  // validate url
  if (Client.validateUrl(url)) {
    console.log('worked')
  } else {
    // TODO: show error message.
  }
}