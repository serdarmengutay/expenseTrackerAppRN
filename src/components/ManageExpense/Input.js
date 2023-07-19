import { TextInput, View, Text, StyleSheet} from "react-native"
import { GlobalStyles } from "../../constants/styles"


function Input({ label, textInputConfig, style }){


    let inputStyles = [styles.input]
    if (textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline)
    }
    return (
            <View style={[styles.inputContainer, style]}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
               {...textInputConfig}
               style={inputStyles}
                />
            </View>
    )
}

const styles = StyleSheet.create({
        inputContainer: {
            marginHorizontal: 4,
            marginVertical: 8,
        },
        label: {
            color: GlobalStyles.colors.primary100,
            fontSize: 12,
            marginBottom: 4
        },
        input: {
            backgroundColor: GlobalStyles.colors.primary100,
            padding: 6,
            borderRadius: 6,
            fontSize: 18,
            color: GlobalStyles.colors.primary700,
        },
        inputMultiline: {
            minHeight: 100,
            textAlignVertical: 'top'
        }
})

export default Input