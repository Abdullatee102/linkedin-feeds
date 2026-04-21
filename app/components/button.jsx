import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8B5CF6', 
    paddingVertical: 16,
    borderRadius: 12,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});