## Master/Detail Exercise

This is a simple app aimed to practice having a master/detail information schema. 
It works by retrieving elements from an API and showing them in the right card. 
Once an element is clicked, the information is expanded in the card on the right. 

Environment setting:

Before running the app, a `.env.local` has to be created. In it, the following keys needs to be added:

```
REACT_APP_API_URL=https://pokeapi.co/api/v2/pokemon?limit={LIMIT}
REACT_APP_LIST_SIZE=20
```

Since this is a public API and the URL is the same for all the environments, there is no need to have it as a configurable key. However, I added this for the sake of practicing.   

Steps to run:

1. cd to project folder
2. `npm install` 
3. `npm start`

