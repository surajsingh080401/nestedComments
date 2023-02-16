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
import AddReply from './AddReply';


const Comment = (props) => {
  const { commentId, commentList, setCommentList } = props;
  const [showReply, setShowReply] = useState(false);
  const comment = commentList[commentId];



  const handleReplyComment = () => {
    setShowReply(true);
  };

  return (
    <View style={{backgroundColor: "#C0C0C0",margin: 10}}>
    <>
      <View>
        <View>  
          <Text style={{margin: 5,padding:5, backgroundColor:"white"}}>
            {comment.text}
          </Text>
        </View>
        <Button
          title='Reply'
          onPress={handleReplyComment}
        />
      </View>
      <View style={{marginLeft:20}}>
        {showReply && (
          <AddReply
            setShowReply={setShowReply}
            parentComment={comment}
            setCommentList={setCommentList}
          />
        )}
        {comment?.children.map((id) => {
          return (
            <View >
              <Comment
                key={id}
                commentId={id}
                commentList={commentList}
                setCommentList={setCommentList}
              />
            </View>
          );
        })}
      </View>
    </>
    </View>
  );
};

export default Comment;
