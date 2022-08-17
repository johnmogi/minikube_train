https://www.bogotobogo.com/DevOps/Docker/Docker_Kubernetes_ElasticSearch_with_Helm_minikube.php
excellent guide but only works until metricbeat

https://www.elastic.co/guide/en/beats/metricbeat/current/running-on-kubernetes.html

deadend.




minikube start
minikube delete

minikube status
kubectl cluster-info

https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/

https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md

kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.5.0/aio/deploy/recommended.yaml


https://theekshanawj.medium.com/kubernetes-deploying-a-nodejs-app-in-micurnikube-local-development-92df31e0b037



 <!-- https://www.digitalocean.com/community/tutorials/how-to-set-up-an-elasticsearch-fluentd-and-kibana-efk-logging-stack-on-kubernetes

 kubectl works.

(still have old minitoring run on minikube)
 nano kube-logging.yaml
 -->



https://theekshanawj.medium.com/kubernetes-deploying-a-nodejs-app-in-minikube-local-development-92df31e0b037

docker build -t weightapp .
docker run -p 3000:3000 weightapp 