import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 200,
    alignItems: "center"
  },
  scrollView:{
    textAlign: 'center',
    width: 400
  },
  input:{
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    backgroundColor: "white",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 50,
    marginTop: 30,
    textAlign: "center",
  },
  titulo:{
    color: "orange",
    marginTop: 30,
    fontSize: 30
  },
  textButtonCalculator:{
    color: "white",
    backgroundColor: "orange",
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 15
  }
});

export default style;