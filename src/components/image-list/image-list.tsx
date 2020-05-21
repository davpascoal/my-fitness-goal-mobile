import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';

interface IImage {
  uri: string;
  id: string;
}

interface IImageProps {
  data: Array<IImage>;
}

const ImageList = (props: IImageProps) => {
  const { data } = props;

  return (
    <FlatList
      data={data}
      style={{ backgroundColor: 'teal', flex: 1 }}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <View
          style={
            index === data.length - 1
              ? [styles.view, styles.backgroundImageLast]
              : styles.view
          }>
          <ImageBackground
            source={item}
            style={styles.backgroundImage}
            imageStyle={styles.imageStyle}
            key={item.id}>
            <Text style={styles.infoText}>Teste2</Text>
          </ImageBackground>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  view: {
    width: '90%',
    flexDirection: 'row',
    marginTop: 20,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 10,
  },
  backgroundImageLast: {
    marginBottom: 20,
  },
  infoText: {
    color: 'white',
  },
});

export default ImageList;
