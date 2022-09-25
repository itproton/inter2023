# Tasks
[] create ts starter
[] create repo
[] 

## Steps
1. Create template / 'Initial commit'
```sh
npm uninstall -g create-react-app
npx create-react-app react-ts-starter --template typescript
cd react-ts-starter/ && npm start

git init 
git add .
// Create repo
git remote add origin https://github.com/itproto/int22.git
git branch -M master
git push -u origin master
```
# Tech
- JS/TS
- Algo
- React
- Node


# CREATE-REACT-APP
- installed rewired
- NOT inject, to give them chance to manage allls
## webpack [react-scripts\config\webpack.config.js](https://github.com/facebook/create-react-app/blob/main/packages/react-scripts/config/webpack.config.js)

# Typescript + React


# LATEST
## 16
- 
## 17
- gradual upgrades (old version co-ex)
- top level event-component not `documentElement` (avoid conflict with other)
- async cleanup for useEffect (after comp removed and screen updated)
- `onClickCapture`

# Performance



TODO:

review https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables


# React repos to follow
useHooks https://usehooks.com/
- https://github.com/enaqx/awesome-react
- https://github.com/cypress-io/cypress-realworld-app
- https://github.com/HospitalRun/hospitalrun-frontend/tree/master/src
- https://github.com/ritz078/moose/tree/master/renderer/components
