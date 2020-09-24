cd '/root/jackadvisor' || exit
git pull

# deploy frontend portion
cd '/root/jackadvisor/client' || exit
npm install
npm run build
sudo cp -r build/ /var/www/html/jackadvisor
sudo service nginx reload