import React, { useState } from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";
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


const CommentList = () => {
  const [commentList, setCommentList] = useState({
    firstLevelIds: []
  });
  return (
    <View>
      <AddComment setCommentList={setCommentList} />
      {commentList.firstLevelIds.map((id) => {
        return (
          <View key={id}>
            <Comment
              commentId={id}
              commentList={commentList}
              setCommentList={setCommentList}
            />
          </View>
        );
      })}
    </View>
  );
};

export default CommentList;
