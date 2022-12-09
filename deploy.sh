rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git push -f git@github.com:LotusFeng/OrangeUI-Website.git
cd -
echo https://lotusfeng.github.io/OrangeUI-Website/index.html