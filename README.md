# GNOSIS BUILDERS VALIDATOR API v1

This is a simple REST API to get .

## Run the app

    npm start

# REST API

## Get the entity only from validator public key

### Request

`GET /api/v1/pubkey?q=:q`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/v1/pubkey?q=0xabcdef

### Response

    HTTP/1.1 200 OK
    Date: Mon, 12 Dec 2022 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 1

    {"entity":"StakeWise"}

## Get the complete data (single/multiple results) from validator public key

### Request

`GET /api/v1/complete/data?q=:q`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/complete/data?q=0xabcdef

### Response

    HTTP/1.1 200 OK
    Date: Mon, 12 Dec 2022 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 3

{ data:
[
{
"validator_pubkey": "0xabcdef",
"gc_deposit_address": "0xdefghi",
"Label": "StakeWise"
}
]
}

## Get the whole validator pools data in JSON format

### Request

`GET /api/v1/complete/data`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/complete/data

### Response

    HTTP/1.1 200 OK
    Date: Mon, 12 Dec 2022 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json

{
data:
[
{
"validator_pubkey": "0xabcdef",
"gc_deposit_address": "0xdefghi",
"Label": "StakeWise"
}, etc...
]
}
