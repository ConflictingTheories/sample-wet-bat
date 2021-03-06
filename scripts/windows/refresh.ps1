# /*                                            *\
# ** ------------------------------------------ **
# **           Sample - Wet Bat PoC     	      **
# ** ------------------------------------------ **
# **  Copyright (c) 2020 - Kyle Derby MacInnis  **
# **                                            **
# ** Any unauthorized distribution or transfer  **
# **    of this work is strictly prohibited.    **
# **                                            **
# **           All Rights Reserved.             **
# ** ------------------------------------------ **
# \*                                            */

# Read .ENV Variables
$env:BUILD_PATH="$(Get-Location)"
Set-Location $env:BUILD_PATH;

foreach($line in [System.IO.File]::ReadLines("$env:BUILD_PATH\.env")) {
    $envData = $line.Split('=')
    [Environment]::SetEnvironmentVariable($envData.get(0), $envData.get(1), "User")   
}

Set-Location .\server

yarn 

yarn build

Set-Location $env:BUILD_PATH;
