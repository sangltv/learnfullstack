import React from 'react'
import {Div, Button, H4, Img, P, AppBar,Toolbar} from "@thaysang/mui"
import axios from 'axios'
import useSWR from 'swr'
import { faker } from '@faker-js/faker'
import {Link} from 'react-router-dom'
const fetcher = (url) => axios.get(url).then(r => r.data)

const Home = () => {
  const {data,error} = useSWR("https://nodejs-fake-api.herokuapp.com/products", fetcher)
  if (error) return(<H4>error</H4>)
  if (!data) return (<H4>Loading...</H4>)
  console.log(data)
  return(
    <Div>
      <AppBar>
        <Toolbar>
          <Link to="/login">Login</Link>
        </Toolbar>
      </AppBar>
      <Div bg="grey" flex={1} display="flex" flexWrap="wrap">
      {
      data.map((item,index) => 
        <Div key={index} size={220} m={2} borderRadius={2} bg="white" display="flex" flexDirection="column">
          <Img width={200} src={faker.image.animals(200,200,true)}/>
          <P>{item.name}</P>
        </Div>)
      }
      </Div>
    </Div>
  )
}

export default Home