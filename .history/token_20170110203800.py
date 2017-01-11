"""Get Auth Token from battlefield1 companion"""
import json
import sys
# Non standard libraries
import requests

SESSION = requests.Session()

INIT_URL = 'https://www.battlefield.com/login?postAuthUri=/companion'
COMPANION_URL = 'https://companion-api.battlefield.com/jsonrpc/web/api?Stats.getCareerForOwnedGamesByPersonaId'
EA_AUTH_URL = 'https://accounts.ea.com/connect/auth?client_id=sparta-companion-web&response_type=code&prompt=none&redirect_uri=nucleus:rest'
API_CODE_URL = 'https://companion-api.battlefield.com/jsonrpc/web/api?Companion.loginFromAuthCode'

AUTH_EMAIL = sys.argv[0]
AUTH_PASSWORD = sys.argv[1]

INIT = SESSION.get(INIT_URL)
AUTH_PAYLOAD = {
    '_eventId': 'submit',
    'password': AUTH_PASSWORD,
    'email': AUTH_EMAIL
}

EA_LOGIN = s.post(INIT.url, data=AUTH_PAYLOAD)
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

print headers
s.cookies.clear()
