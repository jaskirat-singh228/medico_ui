import { SafeAreaView, StyleSheet, Text, FlatList, View, ActivityIndicator, Button, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import ApiIntercepter, { apiDelete, apiGet, apiPost, apiPut } from './ApiIntercepter';
import { Modalize } from 'react-native-modalize';
import { COLORS } from './constrants/common/Colors';

const baseURL = 'https://jsonplaceholder.typicode.com';

const ApiComponent = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [saving, setSaving] = useState(false);

  const modalizeRef = useRef(null);

  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');

  const onOpen = (post) => {
    setSelectedPost(post);
    setNewTitle(post.title);
    setNewBody(post.body);
    modalizeRef.current?.open();
  };

  const callApi = async () => {
    try {
      const response = await apiGet(baseURL, '/posts');
      setPostData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const postRequest = async () => {
    try {
      const maxId = postData.reduce((max, post) => Math.max(max, post.id), 0);
      const newId = maxId + 1;

      const newPost = {
        id: newId,
        title: 'New title',
        body: 'New body'
      };

      setPostData((prevData) => [...prevData, newPost]);
    } catch (error) {
      console.error('Error adding post:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  const handleDelete = async (postId) => {
    setDeleting(postId);
    try {
      await apiDelete(baseURL, `/posts/${postId}`);
      setPostData(postData.filter(post => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    } finally {
      setDeleting(null);
    }
  };
  const onPressSaveData = async () => {
    if (!selectedPost) return;
    setSaving(true);
    try {
      const updatedPost = {
        ...selectedPost,
        title: newTitle,
        body: newBody,
      };
      setPostData(postData.map(post => post.id == selectedPost.id ? updatedPost : post));
      await apiPut(baseURL, `/posts/${selectedPost.id}`, updatedPost)
        .then((response) => {
          console.log(response.data)
        })
      modalizeRef.current?.close();
    } catch (error) {
      console.error('Error updating post:', error);
    } finally {
      setSaving(false);
    }
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
      <View>
        <FlatList
          data={postData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={{ width: 250 }}>
                <Text style={[styles.title, { marginTop: 0 }]}>Id : {item.id}</Text>
                <Text style={styles.title}>Title : {item.title}</Text>
                <Text style={styles.title}>Body : {item.body}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <Button title='Edit' onPress={() => onOpen(item)} color={COLORS.CONTINUE_BG} />
                <TouchableOpacity
                  onPress={() => handleDelete(item.id)}
                  style={styles.deleteButton}
                >
                  {deleting === item.id ? (
                    <ActivityIndicator size='small' color={COLORS.CONTINUE_BG} />
                  ) : (
                    <Text style={styles.deleteButtonText}>Delete</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      <TouchableOpacity
        onPress={postRequest}
        style={styles.postButtonStyle}
      >
        <Text style={{ fontSize: 70 }}>+</Text>
      </TouchableOpacity>
      <Modalize
        ref={modalizeRef}
        modalHeight={300}
      >
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          {selectedPost && (
            <View>
              <TextInput
                style={styles.textInputStyle}
                placeholder='Enter new title'
                value={newTitle}
                onChangeText={setNewTitle}
              />
              <TextInput
                multiline
                style={[styles.textInputStyle, { width: 400, alignSelf: 'center' }]}
                placeholder='Enter new body'
                value={newBody}
                onChangeText={setNewBody}
              />
              <TouchableOpacity
                style={{ alignSelf: 'center', alignItems: 'center', marginTop: 30 }}
                onPress={onPressSaveData}
              >
                {saving ?
                  <ActivityIndicator size='small' color={COLORS.CONTINUE_BG} />
                  :
                  <Text style={{ fontSize: 20, color: COLORS.CONTINUE_BG }}>Save Data</Text>
                }
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modalize>
    </SafeAreaView>
  );
};

export default ApiComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    marginTop: 10,
  },
  postButtonStyle: {
    height: 80,
    width: 80,
    position: 'absolute',
    bottom: 50,
    right: 20,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  textInputStyle: {
    borderRadius: 10,
    borderWidth: 1,
    height: 60,
    padding: 10,
    marginLeft: 5,
    marginTop: 20,
    fontSize: 20,
    width: 300,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7
  },
  deleteButtonText: {
    color: COLORS.CONTINUE_BG,
    fontSize: 18,
  },
});
