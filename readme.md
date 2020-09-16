# Wet Bat - Travel Made Simple (Sample SPA / PoC)
Wet Bat is a proof of concept SPA showcasing various technologies. The purpose of this is to show a simple PoC for a theoretical company known as Wet Bat.

## Dependencies (to deploy)
The Following Technologies are required to run and deploy Wet Bat:
- Docker / Docker-Compose

## Deployment
Please see the following instructions for deploying locally.

First, set your configurations for your environment variables in the `.env` file (see `.env-sample`) and then proceed with the following depending on your OS:

### Windows
Please run the following:

        > . scripts/windows/install.ps1 
        > . scripts/windows/migrate.ps1 # Please note Database must be ready
        > . scripts/windows/seed.ps1 # Ditto

### Linux / Mac
Please run the following:

        $ bash scripts/nix/install.sh
        $ bash scripts/nix/migrate.sh
        $ bash scripts/nix/seed.sh

## Usage
Once the deployment has finished, it should if successful, now be running and accessible from your Browser:

        http://localhost/

__Note__: Also exposed via the default port: `8081`
