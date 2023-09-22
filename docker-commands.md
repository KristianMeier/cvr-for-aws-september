Commands

# random

lsof -i
kill -9 <PID>

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
This is not practical. Volumes solves that
