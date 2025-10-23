![Git image](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png)

# Git - The Stupid Content Tracker

Git commands in terminal.

## git init

Initializes a local folder as a repository.

```sh
$ git init
Initialized Git repository in /Users/b00tc4mp/workspace/neoland-202510/.git/
```

## git remote add origin repo-address

Connects the local repository to its origin in GitHub.

```sh
$ git remote add origin https://github.com/manuelbarzi/neoland-202510
```

## git pull

Pulls all the changes from remote (origin) repository.

```sh
$ git pull
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=<remote>/<branch> master
```

## git branch -a

Shows all the branches in the repository.

```sh
$ git branch -a
  remotes/origin/HEAD -> origin/main
  remotes/origin/main
```

## git switch branch-name

Changes the branch to the given one.

```sh
$ git switch main
Already on 'main'
Your branch is up to date with 'origin/main'.
```

## git branch

Shows the local branches.

```sh
$ git branch   
* main
```

## git status

Shows the status of files in local repo.

```sh
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        staff/

nothing added to commit but untracked files present (use "git add" to track)
```

## git add content-name

Adds content to staging.

```sh
$ git add staff
```

## git config setting

Configures settings in local git.

```sh
$ git config user.email "manuelbarzi@gmail.com"
$ git config user.name "Manuel Barzi"
```