FROM centos
RUN sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
RUN sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
RUN yum -y update && yum clean all
RUN yum -y remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
RUN yum install -y yum-utils
RUN yum-config-manager -y --add-repo https://download.docker.com/linux/centos/docker-ce.repo
RUN yum install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin criu
WORKDIR /
RUN mkdir build
RUN mkdir checkpoint
CMD ["sh","-c","(dockerd --experimental &) && /bin/bash"]