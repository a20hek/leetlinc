import admin from 'firebase-admin';

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert({
			client_email: 'firebase-adminsdk-zvf49@leetlinc.iam.gserviceaccount.com',
			private_key:
				'-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCznzs+L+9Ab+U8\nqTRekaZd6g6F+/wKvB3CS7jpxDxc7s+o5Zc4/Y2D4cYE7lgpaLsyPNfRfjr7to1q\nDuD2ysISd1TuEDTu7fDOgT4ZD8jRrRTw+NYo4QdO3IAjD9TQIosRQuHK6tmyVhLY\n/ACML+OwqYZDTNGyMaZghju1WssruRVZ4VagQgXrg5+0ECt6DCxbJYgNpApOwLmJ\nxcdbYKki8ARh+LDkW4QtK5V428tiMV8QBZuFHsbdS3e7YI/4WK94vZpgH7Hhwcj2\nNIktQGVLCeHV8W7dT20NTG2B4mNNXELUtqrZwdOFIxGVHzCAKNmTau+fUXavY9EG\nP9Oe+AuJAgMBAAECggEAFghKTUS2cV44TWJI3u+5KyxeRy+DOTLdaJt+rUfpipGt\nbZ9p1u78+IgNUMYGkN+8lHszksoLxJveCTwVepggyYCTLZdV0tfjUYU3X34Y6SU0\nnCE9rap6icEQw5w5w6T1D3M3fHslpFMcATsZ+xgVsvH8Ws11rEicSps0gDiIks5u\nhaj3M3NwozPPGS3ibF4xNt+uyEbrsa/ikiHy+vri7yQhyTiUJf+zNCya1UazMkFW\nOiEr+/npcu7qTc+neGBO6MQv9DR994aV0DXSrkogfFKhELSTXEfVRDIDDV/Hs32s\nAO83HMXLUtBIBltTUqN7mmIsGgOZvV1qCnhtUJdcAQKBgQDpTEezP0c2rwEHMX/2\njtqT6mTaFeyATPwQ0qLnr1aVoEsjwxy+bp2ghimF4a0uy0UHqcU/uCWG/RRlfoXV\nNOKLluHV+YSNqIcfYMkykrqcODviuuNlFMueIz6MLwoJ1/BlKwU/Az+breNBwk8C\nostSGucnl5iHtwo/3lOWUFwxiQKBgQDFGdJDrVNOWBklF+uf54knGW1LYeh4k22Z\nuTKWA9u2J1UM6B/m8foSPyg+ZESDtBnPSrEvOEoFSuUNjJbrxe26T6zqQsgBtczS\n2KpK9+aEHv1vLyEMS7KAJp+5zoHq7ev3LxBkSGyDHuglRvOR6s95OVsbW0mDVy59\nnUJtyqiKAQKBgBGK6tlPqMsz3Z/s2PJxS35T4cGEZIRBRbL+I8HILXqS0xOdWEv5\nhWDMtdKbZapfHpG08mAYOLotzZrUKLwffemBLvooCQ+d3Is/e+GRpvaYQ+iIpRC0\nv5rki49++gJDepAg7AQQ+nd6W9xWABryotdJrpgLjiymVt72mNJ0uHoBAoGAGyR4\nKSu4OiS1qb8Giqm24HSG8YeVHO2ofS/cwH3dhtMZykI5CnOuLU8XOqhSKxTlLP+r\nMMZ+owXyTxBaRDOojiyksknqAxpHD44YvWQwEWe3HNWPpoLSHQW0n0DJ8VE8WnjX\nuAelMdVSwLdpmWGNmrMEUdsbX4Pk+hVq7XWoCgECgYEAjTaNdSeLEzdfJN1+uN5b\n9Ww99yBwxKRRAoatrPAHBpjNOKaEU0aAP/kyOd1nsh3TCk23I2/wrS9SicKLZBUg\nLQbb1BcdbwY3nvoy6K8sWaF3Q0IKblUMepu1nHagvEvikwK8nXrIzBUspV1wrBws\nK1WtaO/dTYMvZUpi3DT2AiM=\n-----END PRIVATE KEY-----\n',
			project_id: 'leetlinc',
		}),
	});
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };
