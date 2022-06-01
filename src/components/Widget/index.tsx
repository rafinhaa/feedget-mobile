import React from "react";
import { TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import { theme } from "../../theme";
import { styles } from "./styles";

const Widget: React.FC = () => {
  return (
    <>
      <TouchableOpacity style={styles.button}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>
    </>
  );
};

export default Widget;
