import styles from '../styles/Home.module.css';
import Overall from "../Components/Overall";
import {client} from "../Library/Client";



export default function Home({allproducts}) {

  return (
    <div>
      <Overall allproducts={allproducts}/>
    </div>
  
  )
}

  //const queryproducts = '*[_type=="product"]';
 // const res = await client.fetch(queryproducts);
 export async function getServerSideProps() {
    const queryproducts = '*[_type=="product"]';
    const allproducts = await client.fetch(queryproducts);
    
    return { props:
       {allproducts}
       };
}

