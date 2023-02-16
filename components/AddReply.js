import React, { useState } from "react";
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

const AddReply = (props) => {
  const { setShowReply, parentComment, setCommentList } = props;
  const [replyText, setReplyText] = useState("");

  const updateCommentList = (prevList, newComment) => {
    const updatedParentComment = {
      ...parentComment,
      children: parentComment.children.concat(newComment.id)
    };
    return {
      ...prevList,
      [parentComment.id]: updatedParentComment,
      [newComment.id]: newComment
    };
  };

  const handleAddReply = () => {
    console.log(replyText)
    if (replyText) {
      const newComment = {
        id: getUniqueId(),
        text: replyText,
        children: [],
        parentId: parentComment.id
      };
      setCommentList((prevList) => updateCommentList(prevList, newComment));
      setReplyText("");
      setShowReply(false);
    }
  };

  const handleCommentChange = (e) => {
    setReplyText(e);
  };

  return (
    <View className="mt-6">
      <TextInput
        placeholder="Enter your reply here"
        onChangeText={handleCommentChange}
        value={replyText}
      />
      <Button
        onPress={handleAddReply}
        title="Reply child"
      />
    </View>
  );
};

export default AddReply;
