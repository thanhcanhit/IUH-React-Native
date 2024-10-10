import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  Image,
  Button,
  TextInput,
} from 'react-native';
import React, { PureComponent, useEffect, useState } from 'react';
import { Checkbox } from 'react-native-paper';

const API_URL = 'https://66ff3c9f2b9aac9c997ea01b.mockapi.io/todos';

const TodoItem = ({ id, name, isCompleted, createdAt, onDelete, onEdit }) => {
  const [checked, setChecked] = React.useState(false);


  return (
    <TouchableOpacity style={styles.toDoItem} onPress={(setChecked)}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox status={checked ? 'checked' : 'unchecked'}> </Checkbox>{' '}
        <Text style={{ color: 'white' }}> {name} </Text>{' '}
      </View>{' '}
      <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
        <TouchableOpacity>
          <Image
            source={require('../assets/edit-2-svgrepo-com.svg')}
            style={{ ...styles.image }}
          />{' '}
        </TouchableOpacity>{' '}
        <TouchableOpacity onPress={() => onDelete(id)}>
          <Image
            source={require('../assets/trash-blank-alt-svgrepo-com.svg')}
            style={{ width: 20, height: 20 }}
          />{' '}
        </TouchableOpacity>{' '}
      </View>{' '}
    </TouchableOpacity>
  );
};

export default function TodoApp({navigation}) {
  const [todos, setTodos] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTodos(data);
    };

    fetchData();

  }, []);

  const handleAdd = async (payload) => {
    const response = await fetch(API_URL, {
      method: 'post',
      body: JSON.stringify(payload),
    });
    const data = await response.json();

    setTodos((prev) => [data, ...prev]);
  };

  const handleDelete = async (id) => {
    const response = await fetch(API_URL + "/" +  id, { method: 'DELETE' });
    const data = await response.json();
    console.log('DELETE', data);

    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = async (payload) => {
    const response = await fetch(API_URL + "/" +  id, { method: 'PUT' });
    const data = await response.json();

    setTodos((prev) =>
      prev.map((item) => (item.id === payload.id ? payload : item))
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Image
          source={require('../assets/search-svgrepo-com.svg')}
          style={{ ...styles.image, position: 'absolute', marginLeft: 8 }}
        />{' '}
        <TextInput style={styles.searchBar} placeholder="Search" />
      </View>{' '}
      <FlatList
        style={styles.flatList}
        data={todos}
        renderItem={({ item }) => (
          <TodoItem {...item} onDelete={handleDelete} onEdit={handleEdit} />
        )}
        keyExtractor={(item) => item.id}
      />{' '}
      <View style={styles.action}>
        <TouchableOpacity style={styles.addButton}> + </TouchableOpacity>{' '}
      </View>{' '}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    height: '15%',
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  searchBar: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 40,
    width: '100%',
  },
  flatList: {
    flex: 1,
    padding: 16,
  },
  action: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    width: 50,
    height: 50,
    fontSize: 32,
    color: '#fff',
    backgroundColor: '#295F98',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  toDoItem: {
    width: '100%',
    padding: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#295F98',
    alignItems: 'center',
    marginHorizontal: 4,
    borderRadius: 50,
    marginBottom: 8,
    fontWeight: 700,
  },
  image: {
    width: 25,
    height: 25,
  },
});
