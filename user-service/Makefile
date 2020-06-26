sha=$(shell git rev-parse --short HEAD)
docker-registry=$(shell minikube ip):5000
target=user-service

.PHONY: docker-build
docker-build:
	docker build -t ${docker-registry}/${target}:${sha} .

.PHONY: docker-push
docker-push: docker-build
	docker push ${docker-registry}/${target}:${sha}
