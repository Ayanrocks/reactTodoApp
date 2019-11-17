FROM postgres

RUN rm -rf /docker-entrypoint-initdb.d/
RUN mkdir /docker-entrypoint-initdb.d/

ADD tables.sql /docker-entrypoint-initdb.d/
ADD createdb.sql /docker-entrypoint-initdb.d/
