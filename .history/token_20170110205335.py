"""Get Auth Token from battlefield1 companion"""
import json
import sys
import uuid
# Non standard libraries
import requests

SESSION = requests.Session()

INIT_URL = 'https://www.battlefield.com/login?postAuthUri=/companion'
EA_AUTH_URL = ('https://accounts.ea.com/connect/auth?'
               'client_id=sparta-companion-web&'
               'response_type=code&'
               'prompt=none&'
               'redirect_uri=nucleus:rest')
API_CODE_URL = 'https://companion-api.battlefield.com/jsonrpc/web/api?Companion.loginFromAuthCode'

AUTH_EMAIL = str(sys.argv[1])
AUTH_PASSWORD = str(sys.argv[2])

INIT = SESSION.get(INIT_URL)

AUTH_PAYLOAD = {
    '_eventId': 'submit',
    'password': AUTH_PASSWORD,
    'email': AUTH_EMAIL
}

EA_LOGIN = SESSION.post(INIT.url, data=AUTH_PAYLOAD)
EA_AUTH_CODE = json.loads(SESSION.get(EA_AUTH_URL).text)['code']

SESSION_DATA = {
    "jsonrpc": "2.0",
    "method": "Companion.loginFromAuthCode",
    "params":
        {
            "code": EA_AUTH_CODE,
            "redirectUri":"nucleus:rest"
        },
    "id": str(uuid.uuid4)
}

SESSION_ID = json.loads(
    SESSION.post(
        API_CODE_URL,
        data=json.dumps(SESSION_DATA)
    ).text)['result']['id']

HEADERS = {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'X-GatewaySession': SESSION_ID
}

SESSION.cookies.clear()

print json.dumps(HEADERS);
