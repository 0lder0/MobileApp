import React, { useState } from "react";
import {Image, Pressable, Text, View} from "react-native";
import { styles } from "./styles";
import Input from "../Input";

const Header = ({title, onBackPress, onLogout, showBack, showSearch, showLogout, onSearchKeyword, keyword}) => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSearch = () => {
        setShowSearchInput(search => !search);
    }

    return (
        <View>
          <View style={styles.container}>
            {showBack ? (
              <Pressable hitSlop={20} onPress={onBackPress}>
                <Image
                  source={require('../../assets/tabs/back.png')}
                  style={styles.icon}
                />
              </Pressable>
            ) : showSearch ? (
              <Pressable hitSlop={20} onPress={onSearch}>
                <Image
                  source={require('../../assets/tabs/search.png')}
                  style={styles.icon}
                />
              </Pressable>
            ) : (
              <View style={styles.space} />
            )}
            <Text style={styles.title}>{title}</Text>
            {showLogout ? (
              <Pressable hitSlop={20} onPress={onLogout}>
                <Image
                  source={require('../../assets/tabs/logout.png')}
                  style={styles.icon}
                />
              </Pressable>
            ) : (
              <View style={styles.space} />
            )}
          </View>
          {showSearchInput ? <Input onChangeText={onSearchKeyword} value={keyword} placeholder="Type your keyword" /> : null}
        </View>
      );
    };

export default React.memo(Header);