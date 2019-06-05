FROM ubuntu
MAINTAINER Meedan <sysops@meedan.com>

RUN apt-get update && apt-get install wget git python python-pip libfontconfig -y
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
RUN npm -g install grunt-cli karma-cli bower jshint
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

WORKDIR /app
COPY . /app

RUN mkdir /tmp/git && git init /tmp/git && GIT_DIR=/tmp/git bower --allow-root install && grunt build

COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
EXPOSE 8080
ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]
CMD ["/docker-entrypoint.sh"]
