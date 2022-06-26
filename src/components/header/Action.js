import { PureComponent } from "react";
import {gql } from "@apollo/client";
import cartIcon from "../../images/cart.png";
// import { QueryClient, QueryClientProvider,useQuery } from "react-query";
// import { QueryClientHook } from 'react-query-class-component';
import c from "../../client";
import { Query, Mutation, Subscription } from '@apollo/client/react/components';
import { graphql } from '@apollo/client/react/hoc';

const client = c()  

const GET_CURRENCIES =gql`
query{
	currencies{
		label
    symbol
  }
}
`

 let ali =client
  .query({
    query: GET_CURRENCIES
  })
  .then(data => data.data.currencies)
 ali.then(data=>data)


  function getJobs() {
    return new Promise((resolve, reject) => {
     client
      .query({
       query:GET_CURRENCIES
      })
      .then(resolve)
      .catch(reject);
    });
   }
    let valu=  getJobs().then(data=>data.data.currencies)

    async function getarr(){
        const res = await valu
        const data = await res
        console.log( data   )
     }
   
export class Action extends PureComponent{
    
      
   
    
    
    render(){
       return(
<Query query={GET_CURRENCIES}>
{({ loading, error, data }) => {
            if (error) return <h1>Error...</h1>;
            if (loading || !data) return <h1>Loading...</h1>;

            return <h1>{data.data}</h1>
        }}
</Query>
        )
    }
} 

export default Action;