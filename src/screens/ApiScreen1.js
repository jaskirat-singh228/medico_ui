import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const ApiScreen1 = () => {
    const [data, setData] = useState(undefined)
    const getApiData = async () => {
        // const url = 'https://jsonplaceholder.typicode.com/posts'
        // let result = await fetch(url);
        // result = await result.json();
        // // console.warn(result)
        // setData(result)
        //or
        // useEffect(() => {
        //     fetch(url)
        //       .then((resp) => resp.json())
        //       .then((json) => setData(json))
        //   }, []);


        //GET method/default method:- Recieves data from a server at the specified URL. It is the default HTTP method for fetch. Body is not required.

        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(data => setData(data),console.log(data))
        //     .catch(error => console.error( error))

        //or

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))



        //POST method :- Sends data to a server to create a new resource. Include the data in the body.

        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         title: 'hello',
        //         body: 'abcd'
        //     })
        // })
        //     .then(response => response.json())
        //     .then(data => setData(data))
        //     .catch(error => console.error(error))



        // PUT method:- Updates an existing resource on the server. Include the updated data in the body.

        // fetch('https://jsonplaceholder.typicode.com/posts/2', {
        //     method: 'PUT',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //       title: 'hello',
        //       body: 'abcd'
        //     })
        //   })
        //     .then(response => response.json())  
        //     .then(data => setData(data))        
        //     .catch(error => console.error('Error:', error)); 


        // DELETE method:- Deletes the specified resource from the server.

        // fetch('https://jsonplaceholder.typicode.com/posts/1', {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         title: 'hello',
        //         body: 'abcd'
        //     })
        // })
        //     .then(response => response.json())
        //     .then(data => setData(data), console.log(data))
    }
    useEffect(() => {
        getApiData();
    }, [])
    return (
        <SafeAreaView>
            <Text style={{ fontSize: 50 }}>ApiScreen</Text>
            {
                data ?
                    <View>
                        <Text style={{ marginLeft: 10, fontSize: 20 }}>id: {data.id}</Text>
                        <Text style={{ marginLeft: 10, fontSize: 20 }}>title: {data.title}</Text>
                        <Text style={{ marginLeft: 10, fontSize: 20 }}>body: {data.body}</Text>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{
                                        flexDirection: 'row',
                                        marginBottom: 10,
                                        backgroundColor: 'red',
                                        height: 200,
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{ fontSize: 30 }}>{item.id}</Text>
                                        <View>
                                            <Text style={{ marginLeft: 10, fontSize: 20 }}>title: {item.title}</Text>
                                            <Text style={{ marginLeft: 10, fontSize: 20 }}>body: {item.body}</Text>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View> : null
            }
        </SafeAreaView>
    )
}

export default ApiScreen1

const styles = StyleSheet.create({})