#!/usr/bin/env bash

# For repo maintainers only. This publishes
# updated documentation

current_branch=$(git rev-parse --abbrev-ref HEAD)
loom_dev_branch="gh-pages"

if [ "$current_branch" != "$loom_dev_branch" ]
then
  echo "Cannot deploy on: $current_branch"
  echo "Switch to branch: '$loom_dev_branch'"
  exit 1
fi

git fetch
git rebase master

echo "Building assets"
npm run build

echo 'Copying dist to root of project'

# Copy all files to the root of the project.
# loom.dev serves up index.html
cp -R dist/* .

current_date_time=$(date -u "+%d/%m/%y-%H:%M:%S")

git add .
git commit -m "Deploy: $current_date_time"
git push origin "$loom_dev_branch" --force

echo "Done!"
