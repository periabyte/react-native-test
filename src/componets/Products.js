import React, { useEffect, useState } from 'react';
import { SafeAreaView, Alert, FlatList, View, StatusBar } from 'react-native';
import { getProducts } from '../api/RestApi';
import Product from './Product';

const ListProduct = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const products = await getProducts();

            setData(products);
        };

        getData();
    }, []);

    const goToProduct = (item) => {
        Alert.alert(`Selected: ${item.name}`);
    };
    const keyExtractor = (item) => item.id;
    const renderItem = ({ item }) => (
        <Product product={item} goToProduct={() => goToProduct(item)} />
    );

    return (
        <SafeAreaView>
            <StatusBar barStyle="light-content" backgroundColor="#0087E1" />
            <FlatList
                contentContainerStyle={{ padding: 15 }}
                data={data}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={{ height: 36 }} />}
            />
        </SafeAreaView>
    );
};

export default ListProduct;
