The build will be at /build
so have to use 
docker run --privileged --env NODE_OPTIONS="--max-old-space-size=61440" -d -v "absolutehostpath:/build" fawazahmed0/quran-hadith-search-docusaurus

at cmd:
docker run --privileged --env NODE_OPTIONS="--max-old-space-size=51200" -d -v "%cd%:/build" fawazahmed0/quran-hadith-search-docusaurus

build directory content will be copied to your absolute host path directory as build.zip file

https://hub.docker.com/repository/docker/fawazahmed0/quran-hadith-search-docusaurus
