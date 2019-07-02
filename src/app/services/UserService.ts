export class UserService {
 login(user) {
  const url = 'http://localhost:3000/login';
  return fetch(url, {
    headers: {
      'Content-Type' : 'application/json'
    },
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(user)
  }).then((response) => {
      console.log('Response back ', response.json());
  });
 }

  currentUser = () =>
    fetch('http://localhost:3000/currentUser',
      {credentials: 'include'
      }).then(response => response.json()
    )
}
