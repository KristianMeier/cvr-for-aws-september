Commands

# random

lsof -i
kill -9 <PID>

## Public Images

https://hub.docker.com/r/kristianmeier/cvr-for-aws-september-frontend
https://hub.docker.com/r/kristianmeier/cvr-for-aws-september-api

# docker make an image

docker build -t cvr-api-image .

# docker make an image with version on it. Here "v1" would be the tag.

docker build -t cvr-api-image:v1 .

# list images

docker images

# delete an image

docker image rm cvr-api

# delete an image, that has a container in use

docker image rm cvr-api -f

# delete an container

docker container rm cvr-api

# delete multiple containers

docker container rm cvr-api cvr-api2

# delete all images, container and volumes

docker system prune

# starts a new container

docker run --name cvr-api-container1 cvr-api

# Right number: portnumber exposed by the container (the one in dockerfile)

# Left number: portnumber you want to expose to computer (accessed from the browser)

# D is for detached. If you want the terminal to be available.

docker run --name cvr-api-container2 -p 4000:4000 -d cvr-api

# --rm, this means that container is deleted once it is stopped

docker run --name cvr-api-container2 -p 4000:4000 -d --rm cvr-api-image:krme-tag

# running containers

docker ps

# all containers

docker ps -a

# start a existing continer (docker run, builds it, from scratch)

docker start cvr-api-container2

# stop

docker stop cvr-api-container2

# Volumes - why?

Normally, after changing a file, you would have to build a new image, then make a new container.
This is not practical. Volumes solves that.
Beneath a command with the
-v <LOCAL-COMPUTER_PATH>:<CONTAINER-PATH>
it makes it so, that it's mapped, so any change om the computer, will also change in the container

# Making a volume

docker run --name cvr-api-container2 -p 4000:4000 -d --rm -v /Users/kristianmeier/Documents/app/docker-crash-course-lesson-12/api/:/app cvr-api-image:krme-tag

# Annonymmous folder - Making a volume, that doesnt map one folder (here Node modules.)

docker run --name cvr-api-container2 -p 4000:4000 -d --rm -v /Users/kristianmeier/Documents/app/docker-crash-course-lesson-12/api/:/app -v /app/modules cvr-api-image:krme-tag

altså: Hvis man kun sætter et
-v <CONTAINER-PATH>
så betyder at at ændringer på lokalt ikke giver effekt
I alt altså:

-v <LOCAL-COMPUTER-ROOT-PATH>:<CONTAINER-ROOT-PATH> -v <CONTAINER-PATH>

Det der kommer er "the second -v" er altså "beskyttet" mod opdateringer via volumnes. Det er kun hvis der laves et nyt image og ny container.

# Docker-compose

A benefit of this, is that you do not need to use this long docker runs. Port mappings, volumes, container_name doesnt go into the command anymore, since it is in docker-comppose.

# docker-commands

docker-compose up

Dette gør altså det samme som de lange commands.

# delete container and images of docker-compose

docker-compose down --rmi all
docker-compose down --rmi all -v
add -v if you also want to delete the volumes.

### DOCKER COMPOSE

# Command

# ENV=dev docker-compose up

# build

# relative path to Dockerfile

# ports

# port-mappings (there can be multiple)

# volumes

# the first path is the relative path to the folder on the host machine

# the second path is the absolute path to the folder in the container

# env_file

# relative path to the env file

# for express.js remember dotenv package

# stidin_open

# starts the container in interactive mode. It's the opposite of detached mode.

# Hot-reloading and colored logs.
