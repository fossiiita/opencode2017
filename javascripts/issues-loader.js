$(document).ready(function() {
    $.getJSON("https://api.github.com/repos/fossiiita/opencodecollab/issues?state=open", {}, loadIssues);
});

function loadIssues(data) {
    $(data).each(function(index) {
        var issue_url = this.html_url;
        var title = this.title;
        var author = this.user.login;
        var author_url = this.user.html_url;
        var labels = "";
        var comments = this.comments;
        var issue_type;

        if (this.pull_request) {
            issue_type = '<a href="' + issue_url + '" target="_tab"><i class="pull-right fa fa-2x fa-code-fork"></i></a>';
        } else {
            issue_type = '<a href="' + issue_url + '" target="_tab"><i class="pull-right fa fa-2x fa-exclamation-circle"></i></a>';
        }

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
                                            '<footer><a href="' + author_url +'">' + author + '</a></footer>' +
                                        '</blockquote>' +
                                        labels +
                                        '<a href="' + issue_url +'" target="_tab" class="btn btn-success">' +
                                            '<i class="fa fa-comment-o"></i> &nbsp; <span class="badge">' + comments + '</span>' +
                                        '</a>' +
                                    '</div>' +
                                '</div>' +
                            '</div>';
        
        $('#issues-content').append(issue_markup);
    });
}