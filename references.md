
dns setup -- 
https://www.digitalocean.com/community/questions/how-do-i-point-my-custom-domain-to-my-ip-port-41-111-20-36-8080

nginx stuff (my bug was fixed by setting) -- 
https://stackoverflow.com/questions/47091356/docker-nginx-reverse-proxy-gives-502-bad-gateway

(this was the fix)
```console
Solution: set the value of httpd_can_network_connect is on by run the command sudo setsebool httpd_can_network_connect on -P
```