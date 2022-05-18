The build will be at /build
so have to use 
docker run --env NODE_OPTIONS="--max-old-space-size=61440" -d -v "absolutehostpath:/build" quran-hadith-search

at cmd:
docker run --env NODE_OPTIONS="--max-old-space-size=51200" -d -v "%cd%:/build" fawazahmed0/quran-hadith-search-docusaurus

build directory content will be copied to your absolute host path directory

https://hub.docker.com/repository/docker/fawazahmed0/quran-hadith-search-docusaurus
