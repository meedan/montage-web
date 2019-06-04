FROM ubuntu
MAINTAINER Meedan <sysops@meedan.com>

WORKDIR /app
COPY . /app

RUN apt-get update && apt-get install wget git python python-pip -y
RUN pip install glue
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 8.11.4
RUN mkdir /usr/local/nvm \
    && wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:/usr/local/bin:$PATH
RUN npm -g install grunt-cli karma-cli bower jshint \
    && npm install \
    && bower --allow-root install \
    && grunt build

ENV PATH /app/bin:$PATH

EXPOSE 8080

COPY ./docker-entrypoint.sh /app
ENTRYPOINT ["/app/docker-entrypoint.sh"]
