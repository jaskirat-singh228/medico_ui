import { SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ApiScreen2 = () => {
    const [data, setData] = useState(undefined);
    const getApiData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setData(JSON.stringify(response.data)),
        // console.log(response.data))
            )
            .catch(error => console.error('Error:', error));
//or
        // axios('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'get',
        // })
        //     .then(response => setData(response.data))
        //     .catch(error => console.error(error)):


        // axios({
        //     method: 'post',
        //     url: 'https://jsonplaceholder.typicode.com/posts',
        //     headers: { 'Content-Type': 'application/json' },
        //     data: { title: 'hello',body:'abcdr' }
        //   })
        //     .then(response => setData(response.data),
        //       // console.log(response.data))
        //     .catch(error => console.error('Error:', error));


        // axios.put('https://jsonplaceholder.typicode.com/posts/2', {
        //     title: 'rwgsfdvrw',
        //     body: 'earsfvaet'
        // })
        //     .then(response => setData(response.data),
        //         // console.log(response.data))
        //     .catch(error => console.error('Error updating data:', error));


        // axios.delete('https://jsonplaceholder.typicode.com/posts/2')
        //     .then(response => setData(response.data),
        //         console.log('Resource deleted'))
        //     .catch(error => console.error('Error deleting data:', error));


    }
    useEffect(() => {
        getApiData()
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Data: {data}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ApiScreen2

const styles = StyleSheet.create({})