import React,{useState,  useEffect} from 'react';
import {View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import Shake from 'react-native-shake';

const App = () => {
  const [toogle,setToogle]  = useState(false);

  const handleOnPressToogle = () => setToogle(oldToogle=>!oldToogle);
   
  // Liga o flash do celulas
  useEffect(()=>{
    Torch.switchState(toogle);
  },[toogle]);

  useEffect(()=>{
    // Quando chaqualhar o celular a lanterna liga
    const sbscription = Shake.addListener(()=>{
      setToogle(oldToogle=>oldToogle);
    });

    // Esta função é chamada quando o componente for desmontado
    return ()=> sbscription.remove();
  },[]);

  return (
  <View style={toogle?style.container:style.containerLight} >
    <TouchableOpacity onPress={handleOnPressToogle}>
      <Image 
        style={[style.image, toogle?style.imageLamp:style.imageLampLight]}
        source={toogle?require('./../assets/icons/eco-light.png'):require('./../assets/icons/eco-light-off.png')}
        />
      <Image 
        style={[style.image, toogle?style.imageDio:style.imageDioLight]}
        source={toogle?require('./../assets/icons/logo-dio.png'):require('./../assets/icons/logo-dio-white.png')}
        />
    </TouchableOpacity>
  </View>
)};
export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    alignSelf: 'center',
    resizeMode: 'contain',    
  },
  imageLamp:{
    width: 150,
    height: 150,
  },
  imageDio:{
    width: 250,
    height: 250,
  },
  imageLampLight:{
    width: 150,
    height: 150,
    tintColor:'white',
  },
  imageDioLight:{
    width: 250,
    height: 250,
    tintColor:'white',
  }
});