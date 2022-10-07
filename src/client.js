import {
    ApolloClient,
    InMemoryCache,

  } from "@apollo/client";
  
export default function client(){
    const client = new ApolloClient({
        uri: 'https://634056c9241aac25493cf6e1--legendary-crepe-834a4a.netlify.app/',
        cache: new InMemoryCache()
      });
    return(
        client
    )
}  
  
  