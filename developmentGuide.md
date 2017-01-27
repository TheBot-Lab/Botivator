This part of the documentation was created using/copying (and editing, making changes to) the 

[contribution guide of FCC:](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md)


### Setting up Your system 
 
 [Video from Cloud9 documentation: creating a Cloud9 workspace ](https://docs.c9.io/docs/create-a-workspace)
 
 
  - Create a new workspace:
 
 <img src="https://dl.dropboxusercontent.com/s/dk0mqpn6r3xkhab/workspace.png?dl=0" />

 
 
  - We recommend for the workspace
    - Workspace name: **thebotlab-team2**
    - Choose a template: **HTML5**
    
<img src="https://dl.dropboxusercontent.com/s/m7rn0k9i5cztueg/name.png?dl=0" />

<img src="https://dl.dropboxusercontent.com/s/h262qfdccamv0mj/template.png?dl=0" />

### Forking the thebotlab-team2

<ol>
 <li>Go to the top level thebotlab-team2 repository: <strong>https://github.com/ale-cia/thebotlab-team2</strong></li>
 <li>Click the "Fork" button in the upper right corner of the interface <a href="https://help.github.com/articles/fork-a-repo">More Details Here</a>
</li>
 <li>After the repo has been forked, you will be taken to your copy of the thebotlab-team2 repo at <strong>yourUsername/thebotlab-team2</strong></li>
</ol>

### Cloning Your Fork

<ol>
<li>Open a Terminal / Command Line / Bash Shell in your projects directory (i.e.: /yourprojectdirectory/)</li>
<li>Clone your fork of thebotlab-team2</li>
</ol>

```shell
$ git clone https://github.com/yourUsername/thebotlab-team2.git
```

(make sure to replace yourUsername with your GitHub Username)

This will download the entire thebotlab-team2 repo to your projects directory.

#### Setup Your Upstream *

1. Change directory to the new thebotlab-team2 directory (`cd thebotlab-team2`)
2. Add a remote to the official thebotlab-team2 repo:

```shell
$ git remote add upstream https://github.com/ale-cia/thebotlab-team2.git
```

Congratulations, you now have a local copy of the thebotlab-team2 repo!


#### Maintaining Your Fork

Now that you have a copy of your fork, there is work you will need to do to keep it current.

##### **Rebasing from Upstream**

Do this prior to every time you create a branch for a PR:

1. Make sure you are on the `development` branch

  > ```shell
  > $ git status
  > On branch development
  > Your branch is up-to-date with 'origin/development'.
  > ```

  > If your aren't on `development`, resolve outstanding files / commits and checkout the `development` branch

  > ```shell
  > $ git checkout development
  > ```

2. Do A Pull with Rebase Against `development`

  > ```shell
  > $ git pull --rebase upstream development
  > ```

  > This will pull down all of the changes to the official development branch, without making an additional commit in your local repo.

3. (_Optional_) Force push your updated staging branch to your GitHub fork

  > ```shell
  > $ git push origin development --force
  > ```

  > This will overwrite the development branch of your fork.

### Create A Branch

Before you start working, you will need to create a separate branch specific to the issue / feature you're working on. You will push your work to this branch.

#### Naming Your Branch 

Name the branch something like `xxx-programmername`  where `xxx` is a short description of the changes or feature you are 
attempting to add. For example `fix-email-login-alecia` would be a branch where you fix something specific to email login.

#### Adding Your Branch

To create a branch on your local machine (and switch to this branch):

```shell
$ git checkout -b [name_of_your_new_branch]
```

and to push to GitHub:

```shell
$ git push origin [name_of_your_new_branch]
```

##### If you need more help with branching, take a look at _[this](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)_.


### Setup thebotlab-team2

Once you have thebotlab-team2 cloned, before you start the application, you first need to install all of the dependencies:

```bash
# Install Gulp globally
npm install -g gulp
```

```bash
# Install NPM dependencies
npm install

```

To run eslint and sass pre-processor:

```bash
gulp watch
```

To run the server:
```bash
npm start
```

To visit the page:
 
 - Go to "window" and click  "share":
 
<img src="https://dl.dropboxusercontent.com/s/oh4t514xhx77fd4/Share.png?dl=0" />
 - Copy the URL (Application):
  <img src="https://dl.dropboxusercontent.com/s/2hnnzc4tu8nrnk5/share-2.png?dl=0" />


 - Paste the URL into a Browser Address Bar. In this example the URL is:

```
https://thebotlab-team2.c9users.io
```

 

### Creating A Pull Request

#### What is a Pull Request?

A pull request (PR) is a method of submitting proposed changes to the talktome
Repo (or any Repo, for that matter). You will make changes to copies of the
files which make up thebotlab-team2 in a personal fork, then apply to have them
accepted by thebotlab-team2 proper.


#### Important: ALWAYS EDIT ON A BRANCH

**If you take only take away one thing from this document**, it should be this: Never, **EVER** make edits to the `development` branch. **ALWAYS make a new branch BEFORE you edit files**. This is critical, because if your PR is not accepted, your copy of
staging will be forever sullied and the only way to fix it is to delete your
fork and re-fork.

#### Methods

The method of creating a pull request for thebotlab-team2:

-   Editing files on a local clone 


##### Editing via your Local Fork 

This is the recommended method. Read about [How to Setup and Maintain a Local
Instance of thebotlab-team2](#maintaining-your-fork).

1.  Perform the maintenance step of rebasing `development`.
2.  Ensure you are on the `development` branch using `git status`:

```bash
$ git status
On branch development
Your branch is up-to-date with 'origin/development'.

nothing to commit, working directory clean
```

1.  If you are not on development or your working directory is not clean, resolve any outstanding files/commits and checkout development `git checkout development`

2.  Create a branch off of `development` with git: `git checkout -B
    branch/name-here` **Note:** Branch naming is important. Use a name like
    `short-fix-description-programmername` or `short-feature-description-programmername`.

3.  Edit your file(s) locally with the editor of your choice.

4.  Check your `git status` to see unstaged files.

5.  Review your `git status` first. Add your edited files: `git add path/to/filename.ext`. 

6.  Commit your edits: `git commit -m "Brief Description of Commit"`. Do not add the issue number in the commit message.

7.  Push your commits to your GitHub Fork: `git push -u origin branch/name-here`

9.  Go to [Common Steps](#common-steps) 


### Common Steps

1.  Once the edits have been committed, you will be prompted to create a pull
    request on your fork's GitHub Page.

2.  By default, all pull requests should be against the thebotlab-team2 repo, `development` branch.

3.  Submit a pull request from your branch to thebotlab-team2 `development` branch.

4.  The title (also called the subject) of your PR should be descriptive of your changes and succinctly indicate what is being fixed.

    -   **Do not add the issue number in the PR title or commit message.**

    -   Examples: `Add Test Cases to Chat bot` `Correct typo in function <name>`

5.  In the body of your PR include a more detailed summary of the changes you
    made and why.

    -   If the PR is meant to fix an existing bug/issue, then, at the end of
        your PR's description, append the keyword `closes` and #xxxx (where xxxx is the issue number). Example: `closes #1337`. This tells GitHub to close the existing issue, if the PR is merged.

6.  Indicate if you have tested on a local copy of the site or not.


### How We Review and Merge Pull Requests

Before the pull request we will have a code review session in Slack.


### Next Steps

#### If your PR is accepted

Once your PR is accepted, you may delete the branch you created to submit it.
This keeps your working fork clean.

You can do this with a press of a button on the GitHub PR interface. You can
delete the local copy of the branch with: `git branch -D branch/to-delete-name`

#### If your PR is rejected

Don't despair! You should receive solid feedback from the Issue Moderators as to why it was rejected and what changes are needed.

Many Pull Requests, especially first Pull Requests, require correction or
updating. If you have used the GitHub interface to create your PR, you will need to close your PR, create a new branch, and re-submit.

If you have a local copy of the repo, you can make the requested changes and
amend your commit with: `git commit --amend` This will update your existing
commit. When you push it to your fork you will need to do a force push to
overwrite your old commit: `git push --force`

Be sure to post in the PR conversation that you have made the requested changes.


*******************************


### The project tools:
 - [Express](https://expressjs.com/)
 - [ESLint](http://eslint.org/)
 - [Gulp](http://gulpjs.com/)
 - [Node.js](https://nodejs.org)
 - [Npm](https://www.npmjs.com/)
 - [Sass](http://www.sassshop.com/)
 - [Vanilla JavaScript](http://vanilla-js.com/)




### Workflow
 
 - All the code must comply with the [airbnb styleguide](https://github.com/airbnb/javascript)
 - The code must have descriptive [comments](https://github.com/airbnb/javascript#comments) 
 - The code must have a step by step description (pseudocode) for the code review session
 - Before the pull request, the code has to pass a code review session 
 - If you are having problems with your code let us know in #code-review
 

#### All the code must comply with the airbnb style guide

 - Run eslint 

```shell
gulp watch
```
<ol>
 <li>Make changes to the code and save</li>
 <li>Check the output of eslint in the file logs.txt</li> 
 <li>Correct the errors and warnings</li>
 <li>Make a copy of the content of the file logs.txt for the code review session</li> 
 <li>Delete the content of logs.txt</li>
</ol>

#### The code must have  descriptive comments
 
  Follow the style guide [comments section](https://github.com/airbnb/javascript#comments) 
  
#### The code must have  a step by step  description (pseudocode) 
  
  This pseudocode will be used in the  code review session
  
#### Before the pull request the code has to pass a code review 
  

  - Post in the slack channel **code-review** a snippet with this format:
    -  Title :"Code review session for ```<branch-name>```"
    -  Body: A multiline comment with the content of the ```logs.txt``` file
    -  Body: A multiline comment with the pseudocode 
    -  Body: The code
  
  - We will set a day for a review session
  
  - In the code review session you will explain how the code works
  - If the code pass this review you will have to make a **pull request**
  


#### If you are having problems with your code:
   -  Post in the Slack channel **code-review** a snippet with this format:
   -  Title :"Help with ```<branch-name>```"
   -  Body: A multiline comment with the content of the ```logs.txt``` file
   -  Body: A multiline comment witn the pseudocode 
   -  Body: The code  
  

****************************
* http://stackoverflow.com/questions/7244321/how-do-i-update-a-github-forked-repository
* https://2buntu.com/articles/1459/keeping-your-forked-repo-synced-with-the-upstream-source/
* *  we need test and testers (QA)
