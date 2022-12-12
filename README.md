# GNOSIS BUILDERS VALIDATOR API v1

This is a simple REST API to get the entity given a validator public key.

## Run the app

    npm start

# REST API

### Request

`GET /api/v1/pubkey?q=:q`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/v1/pubkey?q=0xabcdef

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    {"entity":"StakeWise"}
