# bulma-react-docker-boilerplate

### This is a boilerplate to kickstart the project based on ReactJS, Bulma and NodeJS APIs in docker environment.
> 
Run docker-compose up web to bring up the -
> 
-- `nginx` container for serving the public assets in FE/public directory including the webpack bundle
> 
-- `webpack` container that runs the webpack to build and bundle the assets in FE/src directory
> 
-- `api` container to serve the APIs in BE/api code
> 
Alternatively,
> 
-- `docker-compose up api` brings up the api container 
> 
-- `docker-compose up webpack` brings up the webpack container
 > 
-- `docker-compose up nginx ` brings up the nginx container
 > 
