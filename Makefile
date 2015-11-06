.PHONY: docker-image docker-test docker-build docker-push docker-deploy

PROJECT=cmvp-seed
TAG=latest
IMAGE=docker.apiumtech.io/$(PROJECT)

docker-image:
	@docker build -t $(IMAGE) .

docker-test:
	@mkdir -p reports
	@docker run --rm -v `pwd`/reports:/usr/src/app/reports $(IMAGE) grunt test

docker-build: docker-image docker-test

docker-push:
	@docker tag -f $(IMAGE) $(IMAGE):$(TAG)
	@docker push $(IMAGE):$(TAG)
	@docker push $(IMAGE):latest

docker-deploy:
	@docker run --rm -p 9000:9000 $(IMAGE)
