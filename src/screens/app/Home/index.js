import React, {useEffect, useState} from "react"; 
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { categories } from "../../../data/categories";
import CategoryBox from "../../../components/CategoryBox";
import { products } from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem";
import { useNavigation } from "@react-navigation/native";


const Home = () => {

    const navigation = useNavigation();
    const [selectedCategory, setSelectedCategory] = useState();
    const [keyword, setKeyword] = useState();
    const [selectedProduct, setSelectedProducts] = useState(products);

    useEffect(() => {
       if (selectedCategory && !keyword)
        {
            const updatedSelectedProducts = products.filter((product) => product?.category === selectedCategory);
            setSelectedProducts(updatedSelectedProducts);
        } else if (selectedCategory && keyword) {
            const updatedSelectedProducts = products.filter((product) => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword.toLowerCase()));
            setSelectedProducts(updatedSelectedProducts);
        } else if (!selectedCategory && keyword) {
            const updatedSelectedProducts = products.filter((product) => product?.title?.toLowerCase().includes(keyword.toLowerCase()));
            setSelectedProducts(updatedSelectedProducts);
        } else if (!selectedCategory && !keyword) {
        setSelectedProducts(products);
        }
    },
     [selectedCategory, keyword]);

    const renderCategoryItem = ({item}) => {
        return (
            <CategoryBox 
            onPress={()=> setSelectedCategory(item?.id)}
            isSelected={item.id === selectedCategory}
            title={item?.title} image={item?.image}/>
        )
    }

    const renderProductItem = ({item}) => {
        const onProductPress = (product) => {
            navigation.navigate("ProductDetails" , {product});
        }
        return (
            <ProductHomeItem onPress={()=> onProductPress(item)} {...item}/>
        )
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <Header showSearch={true} onSearchKeyword={setKeyword} keyword={keyword} title="Find All You Need"/>
            <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyWExtractor={(item, index) => String(index)}/>
            <FlatList numColumns={2} data={selectedProduct} renderItem={renderProductItem} keyExtractor={(item) => String(item.id)} ListFooterComponent={<View style={{height:250}}/>}/>
        </View>
        </SafeAreaView>
    );
}

export default React.memo(Home);