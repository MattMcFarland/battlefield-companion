import requests
import json

s = requests.Session()
personaid = 1474247023
rnd_id = 'c63929d3-3501-4113-a9d9-4bd416d4bedc'

init_url = 'https://www.battlefield.com/login?postAuthUri=/companion'
companion_url = 'https://companion-api.battlefield.com/jsonrpc/web/api?Stats.getCareerForOwnedGamesByPersonaId'
ea_token = 'https://accounts.ea.com/connect/auth?client_id=sparta-companion-web&response_type=code&prompt=none&redirect_uri=nucleus:rest'
auth_code = 'https://companion-api.battlefield.com/jsonrpc/web/api?Companion.loginFromAuthCode'

email = 'contact@mattmcfarland.com'
password = '01242011aA'
init = s.get(init_url)

login_payload = {
'_eventId': 'submit',
'password': password,
'email': email
}

ea_login = s.post(init.url, data=login_payload)
ea_code = (json.loads((s.get(ea_token)).text))['code']

session_data = {"jsonrpc":"2.0",
"method":"Companion.loginFromAuthCode",
"params":{"code": ea_code,"redirectUri":"nucleus:rest"},
"id":rnd_id}

session_id = (json.loads((s.post(auth_code, data=json.dumps(session_data))).text))['result']['id']

headers = {
'Content-Type': 'application/json',
'Accept': '*/*',
'X-GatewaySession': session_id
}
data = {"jsonrpc":"2.0","method":"Stats.getCareerForOwned GamesByPersonaId","params":{"personaId": personaid},"id":rnd_id}

companion_data = s.post(companion_url, headers=headers, data=json.dumps(data))

print(companion_data.text)

s.cookies.clear()
