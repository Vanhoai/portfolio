push:
	git add . && git commit -m "$(m)" && git push

run:
	bun dev

.PHONY: push, run