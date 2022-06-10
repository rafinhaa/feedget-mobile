import { ArrowLeft } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity, View, Image, Text, TextInput } from "react-native";
import { FeedbackType } from "../Widget";
import ScreenShotButton from "../ScreenShotButton";
import Button from "../Button";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { theme } from "../../theme";

import { styles } from "./styles";

interface Props {
  feedbackType: FeedbackType;
}

const Form: React.FC<Props> = ({ feedbackType }) => {
  const feedbackInfo = feedbackTypes[feedbackType];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
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
      />
      <View style={styles.footer}>
        <ScreenShotButton
          onRemoveShot={() => {}}
          onTakeShot={() => {}}
          screenshot="https://i.imgur.com/qkdpN.png"
        />
        <Button isLoading={false} onPress={() => {}} />
      </View>
    </View>
  );
};

export default Form;
