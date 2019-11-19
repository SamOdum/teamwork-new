const app = document.querySelector('#root');



const signIn = async () => {
const url = 'https://safe-ocean-91018.herokuapp.com/api/v1/auth/sign-in';
const data = { 	email: "p.okoro@team.com", password: "Liepzig" };
try {
  const response = await fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await response.json();
//   console.log('Success:', JSON.stringify(json));

  console.log(json.status);
  return json.status;
} catch (error) {
  console.error('Error:', error);
}
}
const t = signIn();
const text = `The signed in user's token is: ${t}`
const node = document.createElement('div')
const textNode = document.createTextNode(text)
node.appendChild(textNode);

app.appendChild(node);