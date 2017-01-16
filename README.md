# OpenCode Collabrative Website


[![Join the chat at https://gitter.im/Cloud-CV/EvalAI](https://badges.gitter.im/opencode2017.svg)](https://gitter.im/opencode2017?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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
3
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

##Installation

## Prerequisites
### Mac OSX/Linux
GCI 2016 is built with [jekyll](https://jekyllrb.com/) which comes as a ruby gem. So you need to install Ruby to get started.

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
