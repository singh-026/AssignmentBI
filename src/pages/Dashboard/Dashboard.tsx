import React from 'react';
import { View, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';
import Text from '../../config/theme/Text';
import { IconButton, List } from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';
import {  remove } from '../../_features';
import { useAppDispatch, useAppSelector } from '../../_app';
import constants from '../../config/constants';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Dashboard: () => JSX.Element = () => {
  const items = useAppSelector(state=>state.list.value);
  const dispatch  = useAppDispatch();

  const renderItem =({ item }:{item: {name:string,id:number}}) => {
    return (
      <List.Item
        key={item.id}
        title={item.name}
        style={styles.listItem}
        titleStyle={styles.title}
      />
    )
  };
  const deleteItem = (item:string) => {
    dispatch(remove(item))
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }
  const renderHiddenItem = (data:any) => (
    <View style={styles.hiddenContainer}>
      <IconButton
        icon="trash-can-outline"
        iconColor="red"
        size={72}
        onPress={() => {
          deleteItem(data.item)
        }}
        style={[styles.iconButtonDelete]}
      />
    </View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>{constants.INDEX_LIST}</Text>
      </View>
      {items.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>{constants.EMPTY_LIST_MESSAGE}</Text>
        </View>
      ) : (
      <SwipeListView
        keyExtractor={(item, index) => item.id.toString()}
        data={items}
        renderHiddenItem={renderHiddenItem}
        renderItem={renderItem}
        leftOpenValue={100}
        disableLeftSwipe={true}
      />
      )}
     </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  topBar: {
    height: 75,
    backgroundColor: '#1e417d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
    color: '#ffffff',
    fontSize: 20,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eee',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 40,
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  listItem: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 25,
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  iconButtonDelete: {
    marginTop: 10,
    borderRadius: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hiddenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: '#0067ee',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 24,
    color: '#888',
  }
});