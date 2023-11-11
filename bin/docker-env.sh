#!/bin/sh

ENV_CONFIG="env-config.js"

set | grep -E "(REACT_APP|NODE_ENV)" >.env

# Recreate config file
rm -rf ${ENV_CONFIG}
touch ${ENV_CONFIG}

# Add assignment
echo "window._env = {" >>${ENV_CONFIG}

# Read each line in .env file
# Each line represents key=value pairs
while read -r LINE; do
    # Split env variables by character `=`
    if printf '%s\n' "${LINE}" | grep -q -e '='; then
        VAR_NAME=$(printf '%s\n' "${LINE}" | sed -e 's/=.*//')
        VAR_VALUE=$(printf '%s\n' "${LINE}" | sed -e 's/^[^=]*=//')
    fi

    # Read value of current variable if exists as Environment variable
    VALUE=$(set | grep "^${VAR_NAME}=" | cut -f 2 -d '=' | sed -e "s/^\'//" | sed -e "s/\'$//")

    # Otherwise use value from .env file
    if [ -z "${VALUE}" ]; then
        VALUE=${VAR_VALUE}
    fi

    # Append configuration property to JS file
    echo "  $VAR_NAME: \"${VALUE}\"," >>${ENV_CONFIG}
done <.env | grep -v "^$" | grep -v "^\#"

echo "}" >>${ENV_CONFIG}

sed -i 's/<\/head>/<script src="\/env-config.js"><\/script><\/head>/' index.html
