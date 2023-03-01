import React from 'react'
import { Tabbar } from 'react-vant'
import { HomeO, Search, NewspaperO, OrdersO} from '@react-vant/icons'


export default () => {

  return (
      <Tabbar fixed={true}>
        <Tabbar.Item onClick={() => window.location.href = "/dashboard"} icon={<HomeO />}>Home</Tabbar.Item>
        <Tabbar.Item onClick={() => window.location.href = "/tanya"} icon={<Search />}>Tanya</Tabbar.Item>
        <Tabbar.Item onClick={() => window.location.href = "/materi"} icon={<NewspaperO />}>Materi</Tabbar.Item>
        <Tabbar.Item onClick={() => window.location.href = "/soal"} icon={<OrdersO />}>Soal</Tabbar.Item>
      </Tabbar>
  )
}
