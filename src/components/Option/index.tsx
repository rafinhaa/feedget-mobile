import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  Text,
} from "react-native";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

const Option: React.FC<Props> = ({ title, image, ...rest }) => {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Option;
