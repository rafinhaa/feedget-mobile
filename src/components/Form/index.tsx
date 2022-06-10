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

interface Props {
  feedbackType: FeedbackType;
}

const Form: React.FC<Props> = ({ feedbackType }) => {
  const feedbackInfo = feedbackTypes[feedbackType];
  const [screenShot, setScreenShot] = useState<string | null>(null);

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
          onRemoveShot={handleRemoveScreenShot}
          onTakeShot={handleScreenShot}
          screenshot={screenShot}
        />
        <Button isLoading={false} onPress={() => {}} />
      </View>
    </View>
  );
};

export default Form;
