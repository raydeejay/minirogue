GRUNT=/home/raydj/npm/bin/grunt
FILES=index.html main.css the.js
TARGET=user@host:path/to/files/

all:
	patch -p0 < disable-dialog.patch
	$(GRUNT) deploy
	scp $(FILES) $(TARGET)
	patch -p0 -R < disable-dialog.patch
	$(GRUNT) devel
