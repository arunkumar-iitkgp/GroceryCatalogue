import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { styles as globalStyles } from '../navigation/TabNavigator'; // Destructure correctly

export default function BakeryItemsScreen() {
  const bakery = [
    { name: 'Fresh Bread', price: '$2.00', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Croissant', price: '$1.50', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Choco Muffin', price: '$1.25', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Chocolate Cake', price: '$4.50', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Chocolate Cookie', price: '$1.00', image: 'https://images.unsplash.com/photo-1499636136210-6f4ce9127154?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Glazed Donut', price: '$1.75', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000&auto=format&fit=crop' },
  ];  

  return (
    <ScrollView style={styles.container}>
           <Text style={styles.title}>Bakery</Text>
                {bakery.map((bakery, index) => (
                  <View key={index} style={styles.itemContainer}>
                    <Image source={{ uri: bakery.image }} style={styles.image} />
                    <View style={styles.details}>
                      <Text style={styles.name}>{bakery.name}</Text>
                      <Text style={styles.price}>{bakery.price}</Text>
                      <TouchableOpacity style={styles.button} onPress={() => alert(`${bakery.name} added to cart`)}>
                    <Text style={styles.buttonText}>Add To Cart</Text>
                  </TouchableOpacity>
                    </View>
                    
                  </View>
                ))}  
          </ScrollView>
  );
}