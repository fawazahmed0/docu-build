FROM node:alpine
RUN apk update
RUN apk add git
WORKDIR /
RUN mkdir build
WORKDIR /repo
CMD ["sh","-c","git clone --depth 1 https://github.com/fawazahmed0/quran-hadith-search.git . && npm i && npm run build && cp -R build ../"]