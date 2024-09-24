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

const formatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

export default function Page3() {
  const [price, setPrice] = useState<number>(150000);
  const [discountPrice, setDiscountPrice] = useState<number>(120000);
  const [quantity, setQuantity] = useState<number>(1);
  const [total, setTotal] = useState(discountPrice * quantity);

  const handleAddMore = () => {
    setQuantity(quantity + 1);
    setTotal((quantity + 1) * discountPrice);
  };

  const handleRemove = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotal((quantity - 1) * discountPrice);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cartItem}>
        <View style={styles.productCard}>
          <Image
            source={require('../assets/book.jpg')}
            style={{ width: 80, height: 100 }}
          />
          <View style={{ flex: 1, gap: 4 }}>
            <Text style={{ fontWeight: 'bold' }}>
              Tâm Lý Học Tội Phạm Phác Họa Chân Dung Kẻ Phạm Tội
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
              Cung cấp bởi ABC
            </Text>
            <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 18 }}>
              {formatter.format(discountPrice)}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'gray',
                fontSize: 12,
                textDecorationLine: 'line-through',
              }}>
              {formatter.format(price)}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={handleRemove}
                  disabled={quantity === 1}>
                  -
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                  {quantity}
                </Text>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={handleAddMore}>
                  +
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text style={{ color: '#134FEC', fontWeight: 'bold' }}>
                  Mua sau
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.discountCard}>
          <View style={{ flexDirection: 'row', gap: 24, marginTop: 8 }}>
            <Text style={{ marginBottom: 8, fontSize: 12, fontWeight: 'bold' }}>
              Mã giảm giá đã lưu
            </Text>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 12, fontWeight: 'bold', color: '#4379F2' }}>
                Xem tại đây
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <TextInput
              placeholder="Mã giảm giá"
              style={{ flex: 1, borderWidth: 1, padding: 8, borderRadius: 4 }}
            />
            <TouchableOpacity
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: '#0A5EB7',
                borderRadius: 4,
              }}>
              <Text style={{ color: '#fff' }}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.totalCard}>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            paddingVertical: 16,
            paddingHorizontal: 8,
          }}>
          <Text style={{ fontSize: 12 }}>
            Bạn có phiếu quà tặng? Tiki/Goit/Urbot?
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#4379F2',
              marginLeft: 4,
            }}>
            Nhập tại đây
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'space-between',
            padding: 8,
            paddingVertical: 16,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Tạm tính</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'red' }}>
            {formatter.format(total)}
          </Text>
        </View>

        <View
          style={{
            padding: 8,
            paddingVertical: 16,
            backgroundColor: 'white',
            justifyContent: 'space-between',
            marginTop: 'auto',
            gap: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'gray' }}>
              Thành tiền
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'red' }}>
              {formatter.format(total)}
            </Text>
          </View>

          <TouchableOpacity
            style={{ backgroundColor: 'red', padding: 8, borderRadius: 4 }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              TIẾN HÀNH ĐẶT HÀNG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  cartItem: { flex: 2, padding: 8, backgroundColor: '#fff' },
  productCard: { flex: 1, flexDirection: 'row', gap: 8 },
  discountCard: { width: '100%' },
  totalCard: { flex: 3, gap: 24, marginTop: 24 },
  quantityButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3C3D37',
    borderRadius: 4,
    color: '#fff',
  },
});
