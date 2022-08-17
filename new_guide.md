0. minikube delete and clean docker.
1. deploy app to minkube :
application runs on 31000, however loadbalancer sys its pending.
proceed into kibana
<!-- - make sure it works locally -->
- kibana
https://ibm-cloud-architecture.github.io/b2m-nodejs/logging/

https://github.com/deviantony/docker-elk
docker-compose up just works!
user: elastic
password: changeme

docker run --name app-nodejs -d -p 3000:3000 --log-driver=gelf \
--log-opt gelf-address=udp://localhost:5000 app

interesting:
https://github.com/telkomdev/node-elk

