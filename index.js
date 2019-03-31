var user = 'mtu98';
var repo = 'games';
var git_api = `https://api.github.com/repos/${user}/${repo}/contents/`

$.ajax(git_api, {
    contentType: 'application/json',
}).done((result) => {
    for (var i = 0; i < result.length; i++) {
        if ('dir' === result[i].type) {
            var game = result[i].name;
            var games = document.getElementById('games');
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.textContent = game;
            a.setAttribute('href',`./${result[i].name}`);
            li.append(a);
            games.appendChild(li);
        }
    }
});

