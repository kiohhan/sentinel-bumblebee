docker build -t bumblebee-db .
docker run -e POSTGRES_PASSWORD=admin -e POSTGRES_USER=default -e POSTGRES_DB=postgres -p 5432:5432 -d -t bumblebee-db
