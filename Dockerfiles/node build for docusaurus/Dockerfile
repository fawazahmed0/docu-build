FROM node:alpine
RUN apk update
RUN apk add git zip
RUN sysctl vm.swappiness=1
WORKDIR /
RUN mkdir build
WORKDIR /repo
CMD ["sh","-c","git clone --depth 1 https://github.com/fawazahmed0/quran-hadith-search.git . && npm i && npm run build && zip -r build.zip build && cp -R build.zip ../build"]