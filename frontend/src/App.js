import {Div, Button, H4} from "@thaysang/mui"
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(res => res.json())

const App = () => {
  const {data,error} = useSWR("https://reqres.in/api/users?page=1", fetcher)
  if (error) return(<H4>error</H4>)
  if (!data) return (<H4>Loading...</H4>)
  return(
    <Div>
      <H4>Title</H4>
      {data.data.map}
      <Button variant="contained">TEST</Button>
    </Div>
  )
}

export default App