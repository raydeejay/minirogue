

all:
	patch -p0 < disable-dialog.patch
	grunt deploy
	scp index.html main.css the.js "raydj@remote.raydeejay.net:photo/dungeon/"
	patch -p0 -R < disable-dialog.patch
	grunt devel
