import React, {useEffect, useState} from 'react';
import Detail from "./components/detail/Detail.jsx";
import List from "./components/list/List.jsx";
import axios from "axios";
import "./app.scss"
import UseFetchTest from "./components/useFetchTest/UseFetchTest.jsx";
function App() {
    const [list, setList] = useState([])
    const [activeItem, setActiveItem] = useState(null)
    const getList = async () => {
        const response = await axios.get('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
        await setList(response.data)
    }
    useEffect( () => {
        getList()
    }, [])

    const changeItem = (item) => {
        setActiveItem(item)
    }

  return (
    <main className="main">
        <h2>UseEffect</h2>
        <div className="first">
            <List list={list} activeItem={activeItem} changeItem={(item) => changeItem(item)}/>
            {activeItem && <Detail item={activeItem}/>}
        </div>
        <h2>UseFetchHook</h2>
        <UseFetchTest/>
    </main>
  )
}

export default App
