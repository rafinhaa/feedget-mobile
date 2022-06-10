import { styles } from "./styles";
import { View, Image, Text, TouchableOpacity } from "react-native";

import success from "../../assets/success.png";
import Copyright from "../Copyright";

const Form: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={success} style={styles.image} />
      <Text style={styles.title}>Agradecemos o feedback!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
};

export default Form;
