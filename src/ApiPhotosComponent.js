import { SafeAreaView, StyleSheet, Text, View, FlatList, ActivityIndicator, Image, TextInput, RefreshControl } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { apiGetPhotos } from './ApiIntercepter';
import { COLORS } from './constrants/common/Colors';

const ApiPhotosComponent = () => {
    const [postData, setPostData] = useState([])
    const [loading, setLoading] = useState(true)
    const [numOfColumns, setNumColumns] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [refreshing, setRefreshing] = useState(false)

    const apiPhotosRequest = async () => {
        try {
            const response = await apiGetPhotos('https://jsonplaceholder.typicode.com', '/photos')
            setPostData(response.data)
            setRefreshing(false)
        } catch (error) {
            console.error('Error fetching data:', error)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        apiPhotosRequest();
    }, [])

    const handleColumnChange = (text) => {
        setInputValue(text);
        const parsedNum = parseInt(text, 10)
        if (!isNaN(parsedNum) && parsedNum > 0) {
            setNumColumns(parsedNum);
        } else {
            setNumColumns('')
        }
    }

    const handleRefresh = useCallback(async () => {
        setRefreshing(true)
        apiPhotosRequest()

    }, []);
    //or  const handleRefresh = useCallback(async () => {
    //     setRefreshing(true)
    //     await apiPhotosRequest()
    //     setRefreshing(false)
    // }, [])


    const imageHeightWidth = () => {
        if (isNaN(numOfColumns)) return 410
        if (numOfColumns === 1) return 410
        if (numOfColumns === 2) return 200
        if (numOfColumns === 3) return 130
        if (numOfColumns === 4) return 95
        if (numOfColumns === 5) return 74
        if (numOfColumns === 6) return 60
        if (numOfColumns === 7) return 50
        if (numOfColumns === 8) return 42
        if (numOfColumns === 9) return 36
        if (numOfColumns === 10) return 32
        if (numOfColumns === 11) return 28
        if (numOfColumns === 12) return 25
        if (numOfColumns === 13) return 22
        if (numOfColumns === 14) return 20
        if (numOfColumns === 15) return 18
        return 410;
    };

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ fontSize: 20 }}>Loading Please Wait</Text>
                <ActivityIndicator size="large" style={{ marginTop: 20 }} />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    value={inputValue}
                    placeholder="Enter columns"
                    onChangeText={handleColumnChange}
                    keyboardType="numeric"
                    style={styles.textInputStyle}
                />
            </View>
            <FlatList
                data={postData}
                numColumns={numOfColumns}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: item.thumbnailUrl }}
                            style={{
                                width: imageHeightWidth(),
                                height: imageHeightWidth(),
                                borderRadius: 10,
                            }}
                            onError={(error) => console.error('Image loading error:', error)}
                        />
                    </View>
                )}
                key={numOfColumns}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    textInputStyle: {
        fontSize: 20,
        marginHorizontal: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.OR,
        paddingHorizontal: 10,
        paddingVertical: 8
    },
    imageContainer: {
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default ApiPhotosComponent
