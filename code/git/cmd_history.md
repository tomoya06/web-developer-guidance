# CMD HISTORY

````zsh
➜  web-developer-guidance git:(master) git checkout -b dev/gittest
➜  web-developer-guidance git:(dev/gittest) ✗ git add code/git/
➜  web-developer-guidance git:(dev/gittest) ✗ git commit -m "git: new branch"

# merge with rebase
➜  web-developer-guidance git:(dev/gittest) git rebase master
➜  web-developer-guidance git:(dev/gittest) git checkout master
➜  web-developer-guidance git:(master) git merge dev/gittest
# --> Updating fa8f11e..c2ef779
# --> Fast-forward
````
