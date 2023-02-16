import React, { useState } from 'react';
import {Button, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { getUniqueId } from "./utils";
import { SendOutlined } from '@ant-design/icons';

const AddComment = (props) => {
  const { setCommentList } = props;
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    const newId = getUniqueId();
    const newComment = {
      id: newId,
      text: commentText,
      children: [],
      parentId: null
    };
    setCommentList((prevList) => ({
      ...prevList,
      firstLevelIds: prevList.firstLevelIds.concat(newId),
      [newId]: newComment
    }));
    setCommentText("");
  };

  const handleCommentChange = (e) => {
    console.log(e)
    setCommentText(e);
  };

  return (
    <View style={{flex:1,flexDirection:'row'}}>
       <TextInput
        style={styles.input}
        onChangeText={handleCommentChange}
        value={commentText}
        placeholder="Add comment"
      />
      <TouchableOpacity 
          style={{position: 'absolute',
          right: 12,
          top: -9,
          backgroundColor: 'transparent'}}
          onPress={handleAddComment}>
        <Text style={{fontSize:60}}>
            +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        width:350,
        borderWidth: 1,
        padding: 10,
        borderRadius:50
      },
})

export default AddComment;
