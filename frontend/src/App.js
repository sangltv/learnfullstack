import {Div, Button, H4, Img, P} from "@thaysang/mui"
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then(res => res.json())

const App = () => {
  const {data,error} = useSWR("https://reqres.in/api/users?page=1", fetcher)
  if (error) return(<H4>error</H4>)
  if (!data) return (<H4>Loading...</H4>)
  console.log(data)
  return(
    <Div>
      {data.data.map((item,index) => <Div key={index} size={120} display="flex">
        <Img src={item.avatar} size={100}/>
        <P>{item.first_name}  {item.last_name}</P>
      </Div>)}
      <Button variant="contained">TEST</Button>
    </Div>
  )
}

export default App