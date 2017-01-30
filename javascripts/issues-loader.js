var per_page = 8;

function loadMoreIssues(user, repo) {
    // Which set of issues (page number) to be loaded is determined by how many issues are already loaded
    var page = Math.ceil($('#' + user + '-' + repo + '-issues > div').length / per_page) + 1;
    
    $.getJSON("https://api.github.com/repos/" + user + "/" + repo +"/issues?q=state:open&page=" + page + "&per_page=" + per_page, function(data) {
        // Callback function

        // Iterate over each issue
        $(data).each(function(index) {
            if (this.pull_request) {
                // If this issue is a pull request, append empty div and continue
                $('#' + user + '-' + repo + '-issues').append("<div></div>");
                return;     // Equivalent to continue in jQuery
            }

            var issue_url = this.html_url;
            var title = this.title;
            var author = this.user.login;
            var author_url = this.user.html_url;
            var labels = "";
            var comments = this.comments;
            var issue_type = '<a href="' + issue_url + '" target="_tab"><i class="pull-right fa fa-2x fa-external-link"></i></a>';
            var repo_url = "https://github.com/" + user + "/" + repo;
            var repo_name = repo;

            $(this.labels).each(function(index) {
                var link = 'https://github.com/fossiiita/opencodecollab/issues?q=is:issue is:open label:"' + this.name + '"';
                labels += '<a href=\'' + link + '\' target="_tab" class="btn btn-success">' + this.name +'</a> &nbsp;';
            });

            var issue_markup = '<div class="col-xs-12 col-sm-12 col-md-6">' +
                                    '<div class="panel panel-default">' +
                                        '<div class="panel-body" style="text-align: left">' +
                                            issue_type +
                                            '<blockquote>' +
                                                '<p>' + title + '</p>' +
                                                '<footer><a href="' + author_url +'">' + author + '</a> in <a href="' + repo_url + '">' + repo_name + '</a></footer>' +
                                            '</blockquote>' +
                                            labels +
                                            '<a href="' + issue_url +'" target="_tab" class="btn btn-success">' +
                                                '<i class="fa fa-comment-o"></i> &nbsp; <span class="badge">' + comments + '</span>' +
                                            '</a>' +
                                        '</div>' +
                                    '</div><br>' +
                                '</div>';
            
            $('#' + user + '-' + repo + '-issues').append(issue_markup);
        });

        if ($('#' + user + '-' + repo + '-issues > div').length % per_page !== 0) {
            $('#' + user + '-' + repo + '-load-more').remove();
        }
    });
}