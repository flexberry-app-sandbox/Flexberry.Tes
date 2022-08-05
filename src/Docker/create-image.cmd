docker build --no-cache -f SQL\Dockerfile.PostgreSql -t tes/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t tes/app ../..
