$(document).ready(function() {
    $('.github-project').each(function(index) {
        var user = $(this).attr('data-user');
        var repo = $(this).attr('data-repo');

        $.getJSON("https://api.github.com/search/repositories?q=" + repo + "+user:" + user, {}, function(data) {
            $('#' + user + '-' + repo + '-language').html(data.items[0].language);
            $('#' + user + '-' + repo + '-stars').attr('href', data.items[0].html_url);
            $('#' + user + '-' + repo + '-stars span').html(data.items[0].stargazers_count);
            $('#' + user + '-' + repo + '-forks').attr('href', data.items[0].html_url + "/fork");
            $('#' + user + '-' + repo + '-forks span').html(data.items[0].forks_count);
        });
    });
});