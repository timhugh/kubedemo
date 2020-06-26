sha=$(shell git rev-parse --short HEAD)
target=timheuett/kubedemo-user-service

.PHONY: docker-build
docker-build:
	docker build -t ${target}:${sha} -t ${target}:latest .

.PHONY: docker-push
docker-push: docker-build docker-login
	docker push ${target}:${sha}
	docker push ${target}:latest

.PHONY: docker-login
docker-login:
	docker login
