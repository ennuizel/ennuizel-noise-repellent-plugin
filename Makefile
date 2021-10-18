all: \
	noise-repellent-m.js \
	ennuizel-noise-repellent.js

ennuizel-noise-repellent.js: ennuizel-noise-repellent.ts node_modules/.bin/tsc
	./node_modules/.bin/tsc -t es5 --lib es2015,dom $<

node_modules/.bin/tsc:
	npm install

clean:
	rm -f ennuizel-noise-repellent.js

distclean: clean
	rm -rf node_modules
