1st prio (terraform + docker)

- remove the apache stuff. it takes route 80 probably. And then try to change to 80.

- EIP before destroy 16.170.50.49, 51.20.70.251/

- When we have a domain, then we also have a .prod.env for the react app that doesnt have to be changed each time I spin up a new a new instance.

- Get the docker to run (via manual commands) on the EC2 machine. It should be available via the public IP.
- Make it so that it's a script
- Terraform Cloud https://www.youtube.com/watch?v=wGthv5gkuXk

2nd prio (tune react project)

- Buy a domain, set up the react-project. Follow a tutorial first. Remember Elastic IP. HUSK at sætte til port 80:3000 inden i docker-compose.yml
- Get an SSL certificate
- use the useFetchTwo to handle the dataloading that is "hacky" atm.
- use a Amazon backend for the data
