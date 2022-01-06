import React,{useState} from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'

import Header from './src/Header';
import List from './src/List';


export default function App() {
  const [feed, setFeed] = useState([
    {
      id: '1',
      nome:'Code',
      description:'Mais um dia de bugs 🥺',
      imgperfil:'https://i.pinimg.com/564x/7f/10/7f/7f107f439c0ac70a2d491f34dc7bb2a8.jpg',
      imgPublicacao:'https://i.pinimg.com/564x/e2/d2/d1/e2d2d109f3c8dfcc4617a8a0196fc2d3.jpg',
      likeada: true,
      likers: 1
    },
    {
      id: '2',
      nome:'Homer Simpson ',
      description:'Se algo é difícil de fazer, então não vale a pena ser feito!✌️',
      imgperfil:'https://i.pinimg.com/564x/e1/47/5c/e1475c4ed536e8bad8ef672c8d01f053.jpg',
      imgPublicacao:'https://i.pinimg.com/564x/c8/7c/1f/c87c1f4ffe90f4302ca77c67d0ad3879.jpg',
      likeada: false,
      likers: 0
    },
    {
      id: '3',
      nome:' Cr7 ',
      description:'⁠Na minha cabeça, eu sou o melhor. Se não pensarmos assim não temos ambição. Eu tenho de pensar que, na minha profissão, eu sou o melhor. Posso não ser, mas na minha cabeça eu sou o melhor.🥇',
      imgperfil:'https://i.pinimg.com/564x/09/59/23/09592352dbc14c478ff9c0e210348a83.jpg',
      imgPublicacao:'https://i.pinimg.com/564x/15/0d/f5/150df59f7d49091dac9b4c84ebf7e05b.jpg',
      likeada: true,
      likers: 600
    },
    {
      id: '4',
      nome:'Julius ',
      description:'',
      imgperfil:'https://i.pinimg.com/564x/66/9f/f0/669ff0f443b0c9d0913ca1e2895c1353.jpg',
      imgPublicacao:'https://i.pinimg.com/564x/76/08/a3/7608a3b47f59276b96bbe6d3c467005d.jpg',
      likeada: true,
      likers: 63
    },
    {
      id: '5',
      nome:'Will Smith',
      description:'🤵🏽 🤵🏽 ',
      imgperfil:'https://i.pinimg.com/564x/81/26/e5/8126e580e0c28a475b8d7489ce3dcf1f.jpg',
      imgPublicacao:'https://i.pinimg.com/564x/d3/01/36/d30136ab456b52bd0a9602fd003b9199.jpg',
      likeada: true,
      likers: 25
    }
    
  ])

  return (
    <View style={styles.container}>
      <Header/>
    <FlatList
    showsVerticalScrollIndicator={false}
    keyExtractor={(item) =>item.id } 
      data={feed}
      renderItem={({item}) => <List data={item}/>}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    
  }
})
