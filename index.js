const user = 'mtu98';
const repo = 'games';
const git_api = `https://api.github.com/repos/${user}/${repo}/contents/`

$.ajax(git_api, {
    contentType: 'application/json',
}).done(result => {
    for (let i = 0; i < result.length; i++) {
        if ('dir' === result[i].type) {
            const  game = result[i].name;
            const games = document.getElementById('games');
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = game;
            a.setAttribute('href',`./${result[i].name}`);
            li.append(a);
            games.appendChild(li);
        }
    }
});

