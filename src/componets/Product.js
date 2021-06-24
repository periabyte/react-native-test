import React from 'react';
import { Image, View, Text, Pressable } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export default ({ product, goToProduct }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ maxWidth: 102, marginRight: 10 }}>
                <Image
                    source={{ uri: 'https://picsum.photos/102/74' }}
                    style={{ width: 102, height: 74 }}
                />
                <Text
                    style={{
                        fontSize: 15,
                        letterSpacing: 0.38,
                        textAlign: 'center',
                    }}
                >
                    {product.name}
                </Text>
            </View>
            <View>
                <View
                    style={{ flexDirection: 'row', alignContent: 'flex-start' }}
                >
                    <View
                        style={{
                            backgroundColor: '#0087E1',
                            marginRight: 10,
                            width: 67,
                        }}
                    >
                        <View style={{ padding: 5 }}>
                            <Text style={{ fontSize: 14, color: '#fff' }}>
                                Original
                            </Text>
                        </View>
                        <View style={{ padding: 5 }}>
                            <Text style={{ fontSize: 14, color: '#fff' }}>
                                Selling
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginRight: 3 }}>
                        <View>
                            <Text style={{ fontSize: 22, color: '#191B1D' }}>
                                {product.originalPrice}
                            </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 22, color: '#2F9752' }}>
                                {product.sellingPrice}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#EEEEEE',
                            marginRight: 13,
                            width: 57,
                            padding: 5,
                        }}
                    >
                        <View style={{ paddingVertical: 2.5 }}>
                            <Text style={{ fontSize: 8, color: '#191B1D' }}>
                                {product.brand}
                            </Text>
                        </View>
                        <View style={{ paddingVertical: 2.5 }}>
                            <Text style={{ fontSize: 8, color: '#191B1D' }}>
                                {product.type}
                            </Text>
                        </View>
                        <View style={{ paddingVertical: 2.5 }}>
                            <Text style={{ fontSize: 8, color: '#191B1D' }}>
                                {product.category}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            height: 50,
                            justifyContent: 'center',
                            alignContent: 'center',
                        }}
                    >
                        <Pressable onPress={goToProduct}>
                            <SimpleLineIcons
                                name="arrow-right"
                                style={{ fontSize: 31 }}
                            />
                        </Pressable>
                    </View>
                </View>
                <View>
                    <Text
                        style={{
                            fontSize: 8,
                            lineHeight: 16,
                            color: '#545D69',
                        }}
                    >
                        6 days ago
                    </Text>
                </View>
            </View>
        </View>
    );
};
