.PHONY: run build vercel

run:
	bun dev

build:
	bun run build

vercel:
	vercel --prod
