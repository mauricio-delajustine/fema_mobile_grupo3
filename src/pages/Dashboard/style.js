import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: "#019934",
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom: 16,
  },
  image: {
    marginLeft: 100,
    width: 200,
    height: 200,
    alignItems: "center"
  },
  scrollView: {
    textAlign: 'center',
    width: 400
  },
  input: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    backgroundColor: "white",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 40,
    marginTop: 30,
    textAlign: "center",
  },
  textButtonCalculator: {
    paddingTop: 15,
    paddingBottom: 20,
    marginTop: 30,
    marginLeft: 125,
    backgroundColor: "#FF8C00",
    width: 150,
    borderRadius: 30,
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  botaocadastro: {
    width:110,
    backgroundColor: "#FF8C00",
    paddingTop: 5,
    borderRadius: 20,
    paddingBottom: 7,
    marginLeft: 200,
  },
  textobotaocadastrar: {
    color: 'white',
    fontSize:15,
    marginLeft:7,
  }

});

export default style;