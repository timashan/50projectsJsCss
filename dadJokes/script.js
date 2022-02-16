const jokes = document.querySelector('.jokes');
const jokesBtn = document.querySelector('.jokes__btn');

const generateJoke = function () {
  jokesBtn.innerText = 'loading...';
  const joke = fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  })
    .then(res => {
      const json = res.json();
      if (!res.ok)
        return json.then(err => {
          throw new Error(err.mess);
        });
      return json;
    })
    .then(data => {
      jokes.innerText = data.joke;
      jokesBtn.innerText = 'Get Another Joke';
    })
    .catch(err => {
      jokesBtn.innerText = 'Error';
      console.error(err);
    });
};
generateJoke();

jokesBtn.addEventListener('click', generateJoke);
