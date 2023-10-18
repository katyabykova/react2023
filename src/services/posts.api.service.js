let getPosts = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp=>resp.json());

export {getPosts};