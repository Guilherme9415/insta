import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function List(props) {
  function carregaIcone(likeada) {
    return likeada ? require('../img/likeada.png') : require('../img/like.png');
  }

  function mostraLike(likers) {
    if (likers == 0) {
      return;
    }

    return (
      <Text style={styles.likes}>
        {likers} {likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  return (
    <View>
      <View style={styles.viewPerfil}>
        <Image source={{uri: props.data.imgperfil}} style={styles.fotoPerfil} />
        <Text style={styles.nomeUsu}>{props.data.nome}</Text>
      </View>

      <Image
        resizeMode="cover"
        source={{uri: props.data.imgPublicacao}}
        style={styles.fotoPublicacao}
      />

      <View style={styles.area}>
        <TouchableOpacity>
          <Image
            source={carregaIcone(props.data.likeada)}
            style={styles.icone}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnsend}>
          <Image source={require('../img/comment.png')} style={styles.icone} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnsend}>
          <Image source={require('../img/send.png')} style={styles.icone} />
        </TouchableOpacity>
      </View>

      {mostraLike(props.data.likers)}

      <Text style={styles.nomeRodape}>{props.data.nome}</Text>
      <Text style={styles.desRodape}>{props.data.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nomeUsu: {
    paddingLeft: 5,
    fontSize: 22,
    color: '#000',
  },
  fotoPublicacao: {
    height: 400,
    alignItems: 'center',
  },
  area: {
    flexDirection: 'row',
    padding: 5,
  },
  icone: {
    width: 25,
    height: 25,
  },
  btnsend: {
    paddingLeft: 5,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  desRodape: {
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 18,
  },
});
