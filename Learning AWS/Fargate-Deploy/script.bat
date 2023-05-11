aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 910807620466.dkr.ecr.eu-west-1.amazonaws.com
docker build -t fargate-app .
docker tag fargate-app:latest 910807620466.dkr.ecr.eu-west-1.amazonaws.com/fargate-app:latest
docker push 910807620466.dkr.ecr.eu-west-1.amazonaws.com/fargate-app:latest