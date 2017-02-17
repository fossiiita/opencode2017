# OpenCode Collabrative Website


[![Join the chat at https://gitter.im/Cloud-CV/EvalAI](https://badges.gitter.im/opencode2017.svg)](https://gitter.im/opencode2017?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[Facebook Group](https://www.facebook.com/Opencode-1038106262984513)

# This event is over as of 17 Feb 2017, No new pr's will be merged. Thank you for participating and showing interest in OpenCode and OpenSource.

For any further details and queries contact [Gautham](https://www.facebook.com/gauthamzz) .

This webpage was made with the help of 66 opencode participants and 6 mentors. Please visit the website for more deatils.

# Adding a mentor

To add a mentor open the file `mentors.yml` in `_data` folder and please maintain the following format *EXACTLY* (replacing values where indicated):

```yaml
- name: Mentor's name
  github: Mentor's github username
  image: mentor's_image
  twitter: Mentor's twitter id
  facebook: Mentor's facebook id
```

**IMPORTANT:**

- All images must be optimized before uploaded to the repo via commit or PR. You may use any image optimizer of your choice.
- The images should be 240 x 240 pixels.
- Adding Facebook, Twitter, Github, etc. is not obliged. But if you do not want to include social media accounts, please do not provide empty fields like `facebook:`. Ask the mentors if you do not know their accounts.
- Avoid using contractions such as *can't, don't,* etc. If there is no choice (e.g. the name has single quote mark) put double quotes (`"`) around that part.
- Try to use abbreviations in your name wherever possible, i.e. restrict it to 13 letters (including spaces), otherwise it might be truncated automatically. However, the name will be displayed completely when you hover on it on the website.

# Adding yourselves to student section

To add yourself to student section you need to open the file `students.yml` in `_data` folder and please maintain the following format *EXACTLY* (replacing values where indicated):

```yaml
- name: Your name
  github: Your github username
  image: your_image
  twitter: Your twitter id
  facebook: Your facebook id
  referral: Github Id of person who reffered you.
  bio: Some bio about yourself
```

**IMPORTANT:**

- All images must be optimized before uploaded to the repo via commit or PR. You may use any image optimizer of your choice.
- The images should be 240 x 240 pixels.
- Adding Facebook, Twitter, Github, etc. is not obliged. But if you do not want to include your social media accounts, please do not provide empty fields like `facebook:`.
- Avoid changing the whole file just to add yourself. Line endings should not change.
- Avoid using contractions such as *can't, don't,* etc. If there is no choice (e.g. your name has single quote mark) put double quotes (`"`) around that part.
- Try to use abbreviations in your name wherever possible, i.e. restrict your name in 13 letters (including spaces), otherwise your name might be truncated automatically. However, your name will be displayed completely when you hover on it on the website.


# Adding your Blog details.

To add your blog details open the file `blog.yml` in `_data` folder and please maintain the following format *EXACTLY* (replacing values where indicated):

```yaml
- name: Your name
  github: github ID
  blogname: Your Blog name
  image: image_name.jpg
  link: <blog_url>
  personalweb: <url>
```

**IMPORTANT:**

-The images have to be uploaded into the folder called blog inside the images folder.
- All images must be optimized before uploaded to the repo via commit or PR. You may use any image optimizer of your choice.
- The images should be 240 x 240 pixels.
- Avoid using contractions such as *can't, don't,* etc. If there is no choice (e.g. the name has single quote mark) put double quotes (`"`) around that part.
- Try to use abbreviations in your name wherever possible, i.e. restrict it to 13 letters (including spaces), otherwise it might be truncated automatically. However, the name will be displayed completely when you hover on it on the website.
-The images have to be uploaded into the folder called blog inside the images folder.


# Contributing

## Code practices

Please help us follow the best practice to make it easy for the reviewer as well as the contributor.
We want to focus on the code quality more than on managing pull request ethics.

- [People before code](http://hintjens.com/blog:95): If any of the following rules are violated, the pull-requests must not be rejected. This is to create an easy and joyful onboarding process for new programmers and first-time contributors.

- Single commit per pull request and name the commit as something meaningful, example: `Adding <-your-name-> in students/mentors section`.

- Reference the issue numbers in the commit message if it resolves an open issue. Follow the pattern `Fixes #<issue number> <commit message>`

- Provide the link to live `gh-pages` from your forked repository or relevant screenshot for easier review.

- Pull Request older than 4 days with no response from the contributor shall be marked closed.

- Avoid duplicate PRs, if need be comment on the older PR with the PR number of the follow-up (new PR) and close the obsolete PR yourself.

Also, we have a team of maintainers to whom you can write if your pull-request goes unnoticed. They may have time.

## After each contribution

After your awesome contribution, add your contribution details to [scores.yml](https://github.com/fossiiita/opencodecollab/blob/master/_data/scores.yml). Please maintain the following format EXACTLY (replacing values where indicated):

```
- github: your_username
  contributions:
    - name: short_title_for_contribution
      link: url_to_contribution_as_proof
      score: 10
    - name: other_contribution_if_any
      link: url_to_other_contribution_as_proof
      score: 20
  total: 30
```

**IMPORTANT:**

-  If you don't have a record in ```scores.yml``` you can create yours at the bottom or in any order. You can refer to [this](http://docs.ansible.com/ansible/YAMLSyntax.html) if you want help with YAML syntax, but if you follow the above format strictly you wont be needing it!

- For your future contributions, please create a short PR to update your contributions and total score in ```scores.yml```. This helps us to track your contributions effectively.

## Tutorials

### Command Line Tutorials

- [OpenHatch Missions](https://openhatch.org/missions/)

### Git/Github Tutorials

### Git: Introduction

- [Git - the simple guide (awesome)](http://rogerdudler.github.io/git-guide/)
- [An Intro to Git and GitHub for Beginners (Tutorial)](http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)

#### Github: Introduction

- [An Intro to Git and GitHub for Beginners (Tutorial)](http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)
- [Github Hello World](https://guides.github.com/activities/hello-world/)
- [Changing a commit message](https://help.github.com/articles/changing-a-commit-message/)

### Merge Commits

- [How To Manually Fix Git Merge Conflicts (video)](https://www.youtube.com/watch?v=g8BRcB9NLp4)

#### Squash Commits

- [Git Rebase (squash last commit)](https://www.youtube.com/watch?v=qh9KtjfjzCU)
- [Squash Commits with Git](https://davidwalsh.name/squash-commits-git)

##Installation

## Prerequisites
### Mac OSX/Linux
OpenCode is built with [jekyll](https://jekyllrb.com/) which comes as a ruby gem. So you need to install Ruby to get started.

[RVM](https://rvm.io/) make it easy to install and manage different versions of Ruby. Install Ruby using RVM by running the following commands

```
~ $ gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3

~ $ \curl -sSL https://get.rvm.io | bash -s stable --ruby
```

This installs RVM with the latest stable version of Ruby

**Ubuntu users:** You may need to enable `Run command as a login shell` in Ubuntu's Terminal, under _Edit > Profile Preferences > Title and Command_. Then close the terminal and reopen it. You may also want to run `source ~/.rvm/scripts/rvm` to load RVM.

To install ruby gems from a Gemfile you would need `bundler` which by default comes with RVM ruby but if isn't present you would need to install it using the command `gem install bundler`.

### Windows

If on Windows, you can follow [this guide](https://jekyllrb.com/docs/windows/) on how to install [jekyll](https://jekyllrb.com/).

## Deployment
After you have installed Ruby and cloned the repository deploy the application running the following commands
```
# Enter the app directory


# Install gems using bundler
~$ bundle install

# Build site starting jekyll server
~$ bundle exec jekyll serve
```

You are ready to go! Browse to `http://localhost:4000` 
