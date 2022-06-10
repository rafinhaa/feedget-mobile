import { useState } from "react";
import { ArrowLeft } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity, View, Image, Text, TextInput } from "react-native";
import { FeedbackType } from "../Widget";
import ScreenShotButton from "../ScreenShotButton";
import Button from "../Button";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { captureScreen } from "react-native-view-shot";

import { theme } from "../../theme";

import { styles } from "./styles";
import { api } from "../../lib/api";

interface Props {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

const Form: React.FC<Props> = ({
  feedbackType,
  onFeedbackCanceled,
  onFeedbackSent,
}) => {
  const feedbackInfo = feedbackTypes[feedbackType];
  const [screenShot, setScreenShot] = useState<string | null>(null);
  const [isFeedbackSent, setIsFeedbackSent] = useState(false);
  const [comment, setComment] = useState("");

  const handleScreenShot = () => {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    })
      .then((uri) => {
        setScreenShot(uri);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemoveScreenShot = () => {
    setScreenShot(null);
  };

  const handleSendFeedback = async () => {
    if (isFeedbackSent) return;

    setIsFeedbackSent(true);

    try {
      await api.post("/feedbacks", {
        type: feedbackType,
        screenShot,
        comment,
      });
      onFeedbackSent();
    } catch (error) {
      console.log(error);
    } finally {
      setIsFeedbackSent(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackInfo.title}</Text>
        </View>
      </View>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        onChangeText={setComment}
      />
      <View style={styles.footer}>
        <ScreenShotButton
          onRemoveShot={handleRemoveScreenShot}
          onTakeShot={handleScreenShot}
          screenshot={screenShot}
        />
        <Button isLoading={isFeedbackSent} onPress={handleSendFeedback} />
      </View>
    </View>
  );
};

export default Form;
