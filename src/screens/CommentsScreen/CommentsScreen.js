import React from "react";
import { View } from "react-native";
import { useQuery } from "react-query";
import { fetchComments } from "../../services/commentsServices";

export default function CommentsScreen () {
    const { data: comments, isLoading, isFetching } = useQuery(['commensts'], fetchComments)

    if (isLoading || isFetching) {
        return <h1>Caregando...</h1>
    }

    return (
        <View>
            {
                comments.map(comment => <h3>{`${comment.id} - ${comment.UserName}`}</h3>)
            }
        </View>
        )
}