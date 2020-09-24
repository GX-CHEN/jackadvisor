cd '/root/jackadvisor' || exit
git pull

# deploy frontend portion
cd '/root/jackadvisor/jackadvisor-web' || exit
npm install
npm run build || exit
sudo cp -r build/ /var/www/html/
sudo service nginx reload
