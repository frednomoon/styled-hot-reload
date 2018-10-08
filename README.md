## To reproduce issue:

- Clone repo
- `yarn` then `npm start`
- Open in browser
- Change anything outside the createGlobalStyle function to trigger a hot module reload
- Change something inside the function to enable that module to reload.