import {Div, Button, H4, Img, P} from "@thaysang/mui"
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then(res => res.json())

const App = () => {
  const {data,error} = useSWR("https://3001-sangltv-learnfullstack-u5hsk3ecwdy.ws-us75.gitpod.io/users", fetcher)
  if (error) return(<H4>error</H4>)
  if (!data) return (<H4>Loading...</H4>)
  console.log(data)
  return(
    <Div>
      {data.map((item,index) => <Div key={index} size={120} display="flex">
        <P>{item.username}</P>
      </Div>)}
      <Button variant="contained">TEST</Button>
    </Div>
  )
}

export default App