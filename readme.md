# Wet Bat - Travel Made Simple (Sample SPA / PoC)
Wet Bat is a proof of concept SPA showcasing various technologies. The purpose of this is to show a simple PoC for a theoretical company known as Wet Bat.

It is designed to showcase the following technologies and full stack experience:
* Frontend
  * React
* Database (Relational)
  * ORM
  * Migrations
  * Seeding
* API Design
  * RESTful
  * Routing
* Data Fetching
  * Fetch / Web Workers
* Docker Deployment
  * Turnkey Start

## Dependencies (to deploy)
The Following Technologies are required to run and deploy NERD:
- Docker / Docker-Compose

## Deployment
Please see the following instructions for deploying locally.

First, set your configurations for your environment variables in the `.env` file (see `.env-sample`) and then proceed with the following depending on your OS:

### Windows
Please run the following:

        > . scripts/windows/install.ps1 
        > . scripts/windows/migrate.ps1 up # Please note Database must be ready
        > . scripts/windows/seed.ps1 # Ditto

### Linux / Mac
Please run the following:

        $ bash scripts/nix/install.sh
        $ bash scripts/nix/migrate.sh up # Please note Database must be ready
        $ bash scripts/nix/seed.sh # Ditto

## Maintenance
The above will initialize the Database - then you can perform manual updates and migrations from there. Additionally:

### Windows
Please run the following:

        > . scripts/windows/refresh.ps1 # Build New Frontend
        > . scripts/windows/build.ps1 # Build New Image
        > . scripts/windows/migrate.ps1 [up|down] # Migrate forward or rollback
        > . scripts/windows/seed.ps1 [up|down] # Seed database
        > . scripts/windows/start.ps1 # Replace Image
        

### Linux / Mac
Please run the following:

        $ bash scripts/nix/refresh.sh # Build New Frontend
        $ bash scripts/nix/build.sh # Build New Image
        $ bash scripts/nix/migrate.sh [up|down] # Migrate forward or rollback
        $ bash scripts/nix/seed.sh [up|down] # Seed database
        $ bash scripts/nix/start.sh # Replace Image
        
## Usage
Once the deployment has finished, it should if successful, now be running and accessible from your Browser:

        http://localhost/

__Note__: Also exposed via the default port: `8081`

## License
MIT License - See License File for more details.