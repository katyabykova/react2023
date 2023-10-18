let getLaunch = fetch('https://api.spacexdata.com/v3/launches/')
.then(resp=>resp.json())

export {getLaunch}