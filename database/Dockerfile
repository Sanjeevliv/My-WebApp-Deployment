FROM migs/mysql-5.7
ENV MYSQL_ROOT_PASSWORD=HelloIndia
ENV MYSQL_DATABASE=my_database
ENV MYSQL_USER=Sanjeevliv
ENV MYSQL_PASSWORD=HelloIndia
COPY my-database.sql /docker-entrypoint-initdb.d/
EXPOSE 3306