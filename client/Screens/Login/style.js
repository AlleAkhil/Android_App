import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#000000',
      },
      textSign: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Mulish',
      },
      smallIcon: {
        marginRight: 10,
        fontSize: 24,
      },
      logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        height: 90,
        width: 90,
        marginTop: 160,
      },
      text_footer: {
        color: '#05375a',
        fontSize: 18,
      },
      action: {
        flexDirection: 'row',
        paddingTop: 14,
        paddingBottom: 3,
        marginTop: 86,
        marginLeft: 61,
        marginRight: 61,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderColor: '#4A494947',
        borderRadius: 50,
        height: 42,
        width: 238,
        backgroundColor: '#1F191966',
      },
      textInput: {
        flex: 1,
        marginTop: -12,
        color: '#fff',
        fontFamily: 'Mulish',
      },
      loginContainer: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
      },
      header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
      },
      text_header: {
        color: '#420475',
        fontWeight: 'bold',
        fontSize: 30,
      },
      button: {
        alignItems: 'center',
        marginTop: 56,
        alignItems: 'center',
        textAlign: 'center',
        margin: 20,
      },
      inBut: {
        width: 238,
        height: 42,
        backgroundColor: '#00FF2580',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 50,
      },
      bottomButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      smallIcon2: {
        fontSize: 40,
        // marginRight: 10,
      },
      bottomText: {
        color: 'black',
        fontSize: 12,
        fontWeight: '600',
        marginTop: 5,
      },
})

export default style