# /*                                            *\
# ** ------------------------------------------ **
# **          	Sample - Wet Bat PoC     	      **
# ** ------------------------------------------ **
# **  Copyright (c) 2020 - Kyle Derby MacInnis  **
# **                                            **
# ** Any unauthorized distribution or transfer  **
# **    of this work is strictly prohibited.    **
# **                                            **
# **           All Rights Reserved.             **
# ** ------------------------------------------ **
# \*                                            */

FROM ubuntu
LABEL Author "Kyle Derby MacInnis"
ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=America/Edmonton
# Yarn & NodeJS
RUN apt-get update -y && apt-get install -y curl nodejs git gnupg dos2unix
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -y && apt-get install -y yarn
# Env Variables
ENV API_HOST=${API_HOST}
ENV API_VERSION=${API_VERSION}
ENV API_ROUTE_PATH=${API_ROUTE_PATH}
ENV APP_PORT=${PORT}
ENV DB_TYPE=${DB_TYPE}
ENV DB_USER=${DB_USER}
ENV DB_PASS=${DB_PASS}
ENV DB_HOST=${DB_HOST}
ENV DB_NAME=${DB_NAME}
ENV PUBLIC_URL=${PUBLIC_URL}
ENV ENABLE_AUTH=${ENABLE_AUTH}
# Copy Content
WORKDIR /opt
RUN mkdir wetbat
WORKDIR /opt/wetbat
# Build Source
COPY . .
RUN yarn
RUN yarn build
# Expose Ports
EXPOSE 8081
# Start when Container Opens
CMD [ "yarn", "start" ]
