"""Connect to bf1, retrieve """
import sys
import json
import uuid
import requests

SESSION = requests.Session()
PERSONA_ID = sys.argv[0]
UUID = str(uuid.uuid4())

LOGIN_URL = 'https://www.battlefield.com/login?postAuthUri=/companion'
# companion_url = 'https://companion-api.battlefield.com/jsonrpc/web/api?Stats.getCareerForOwnedGamesByPersonaId'
EA_TOKEN = 'https://accounts.ea.com/connect/auth?client_id=sparta-companion-web&response_type=code&prompt=none&redirect_uri=nucleus:rest'
AUTH_CODE = 'https://companion-api.battlefield.com/jsonrpc/web/api?Companion.loginFromAuthCode'

EMAIL = sys.argv[1]
PASSWORD = sys.argv[2]
SESSION.get(LOGIN_URL)

LOGIN_PAYLOAD = {'_eventId': 'submit', 'password': PASSWORD, 'email': EMAIL}

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

# data = {"jsonrpc":"2.0","method":"Stats.getCareerForOwnedGamesByPersonaId","params":{"personaId": personaid},"id": rnd_id}

# companion_data = s.post(companion_url, headers=headers, data=json.dumps(data))

print(companion_data.text)

# s.cookies.clear()
