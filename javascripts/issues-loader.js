var page = 1;
var per_page = 8;
var total_count = 0;

$(document).ready(function() {
    // making a request to get the number of issues
    $.getJSON("https://api.github.com/search/issues?q=label:opencode+state:open+type:issue&page=1&per_page=1", {}, init);
});

function init(data) {
    total_count = data.total_count;

    for (i = 1; i <= Math.ceil(total_count / per_page); ++i) {
        $('#issues-pagination').append('<li id="issues-page-' + i + '"><a href="#issues" onclick="getIssuesForPage(' + i + ')">' + i + '</a></li>');
    }

    getIssuesForPage(page);
}

function getIssuesForPage(num) {
    $('#issues-page-' + page).removeClass('active');
    page = num;
    $('#issues-page-' + page).addClass('active');
    $('#issues-content').empty();
    loadIssues();
}

function loadIssues() {
    $.getJSON("https://api.github.com/search/issues?q=label:opencode+state:open+type:issue&page=" + page + "&per_page=" + per_page, {}, loadIssuesCallback);
}

function loadIssuesCallback(data) {
    $(data.items).each(function(index) {
        var issue_url = this.html_url;
        var title = this.title;
        var author = this.user.login;
        var author_url = this.user.html_url;
        var labels = "";
        var comments = this.comments;
        var issue_type = '<a href="' + issue_url + '" target="_tab"><i class="pull-right fa fa-2x fa-exclamation-circle"></i></a>';

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