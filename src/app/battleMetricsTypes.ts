export type ServerInfoJson = {
    "data": [{
        "type": string,
        "id": string,
        "attributes": {
            "id": string,
            "name": string,
            "address": string,
            "ip": string,
            "port": number,
            "players": number,
            "maxPlayers": number,
            "rank": number,
            "location": number[],
            "status": string,
            "details": {
                "version": string,
                "password": boolean,
                "official": boolean,
                "reforger": {
                    "scenarioName": string,
                    "supportedGameClientTypes": string[],
                    "battlEye": boolean,
                    "mods": string[]
                }
            },
            "private": boolean,
            "createdAt": string,
            "updatedAt": string,
            "portQuery": number,
            "country": string,
            "queryStatus": string
        },
        "relationships": {
            "game": {
                "data": {
                    "type": string,
                    "id": string
                }
            }
        }
    }],
    "included": unknown[]
}

export type ServerInfoData = {
    "type": string,
    "id": string,
    "attributes": {
        "id": string,
        "name": string,
        "address": string,
        "ip": string,
        "port": number,
        "players": number,
        "maxPlayers": number,
        "rank": number,
        "location": number[],
        "status": string,
        "details": {
            "version": string,
            "password": boolean,
            "official": boolean,
            "reforger": {
                "scenarioName": string,
                "supportedGameClientTypes": string[],
                "battlEye": boolean,
                "mods": string[]
            }
        },
        "private": boolean,
        "createdAt": string,
        "updatedAt": string,
        "portQuery": number,
        "country": string,
        "queryStatus": string
    },
    "relationships": {
        "game": {
            "data": {
                "type": string,
                "id": string
            }
        }
    }
}
