import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const ratingText = {
  1: 'Tệ',
  2: 'Hơi tệ',
  3: 'Bình thường',
  4: 'Tốt',
  5: 'Xuất sắc',
};

export default function Page2() {
  const [rating, setRating] = useState<number>(5);
  const [text, setText] = useState<string>('');
  return (
    <View style={styles.container}>
      <View style={styles.productCard}>
        <Image
          source={require('../assets/usb.webp')}
          style={{ width: 50, height: 50 }}
        />
        <Text style={{ fontWeight: 'bold' }}>
          USB bluetooth Music Receiver HJX-001 - Biến loa thường thành loa
          bluetooth
        </Text>
      </View>
      <View style={styles.ratingCard}>
        <Text style={{ textAlign: 'center', fontSize: 18 }}>
          {ratingText[rating as keyof typeof ratingText]}
        </Text>
        <View
          style={{ flexDirection: 'row', justifyContent: 'center', gap: 8 }}>
          {Array.from(Array(5)).map((item, index) => {
            if (index < rating)
              return (
                <TouchableOpacity onPress={() => setRating(index + 1)}>
                  <Image
                    key={index}
                    source={require('../assets/star-color.png')}
                    style={{ width: 30, height: 30 }}
                  />
                </TouchableOpacity>
              );
            else
              return (
                <TouchableOpacity onPress={() => setRating(index + 1)}>
                  <Image
                    key={index}
                    source={require('../assets/star-none.png')}
                    style={{ width: 30, height: 30 }}
                  />
                </TouchableOpacity>
              );
          })}
        </View>
        <Button title="Thêm hình ảnh" color="#000" />
        <TextInput
          value={text}
          onChangeText={(value)=> setText(value)}
          multiline
          style={{ borderWidth: 1, flex: 1, padding: 8, borderRadius: 8 }}
          placeholder="Hãy nhập chi tiết cảm nhận của bạn"
        />
        <Button title="Gửi" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8, backgroundColor: '#fff' },
  productCard: { flexDirection: 'row', flex: 1, gap: 2 },
  ratingCard: { flex: 3, paddingHorizontal: 24, gap: 8 },
});
