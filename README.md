# React Native Mobile Scaffold

Small Expo app with login, a simple entry log, and a settings screen. Local screen switching only — no backend wired up yet.

## Screens

- **Login** — email/password gate (demo only; any valid-looking input gets you through)
- **Dashboard** — add labeled numeric entries and browse recent ones
- **Settings** — placeholder account info + sign out

Helpers live in `src/utils/validators.js` (trim/sanitize text, range-check numbers).

## Setup

Needs Node.js (LTS).

```bash
git clone https://github.com/Vicky-T-867/react-native-mobile-scaffold-.git
cd react-native-mobile-scaffold-
npm install
```

Optional env keys (kept out of git via `.gitignore`):

```env
EXPO_PUBLIC_API_MODE=development
EXPO_PUBLIC_FIREBASE_API_KEY=your_test_api_key_here
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_test_auth_domain_here
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_test_project_id_here
EXPO_PUBLIC_PRODUCTION_API_URL=https://yourdomain.com
```

## Run

```bash
npx expo start
```

Then scan the QR code with Expo Go (iOS camera / Android Expo Go), or press `i` / `a` for a simulator.

## License

MIT
