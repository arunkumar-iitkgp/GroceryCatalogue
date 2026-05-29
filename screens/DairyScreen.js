
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../navigation/TabNavigator';

export default function DairyScreen() {
    const Dairy = [
      { name: 'Milk', price: '$2.50', image: 'https://images.unsplash.com/photo-1523473827533-2a64d0d36748?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Cheese', price: '$3.75', image: 'https://images.unsplash.com/photo-1717957352201-1d3ee984b6ed?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Yogurt', price: '$1.20', image: 'https://images.unsplash.com/photo-1572041002237-762bdc102cf6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Butter', price: '$2.00', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Ghee', price: '$2.00', image: 'https://cdn.pixabay.com/photo/2024/02/05/09/13/ghee-8554042_1280.jpg' },
      { name: 'Ghee', price: '$2.00', image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  
  
    ];
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Fresh dairy products for you from folders</Text>
            {Dairy.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <Image source={{uri:item.image}} style={styles.image} />
                <View style={styles.details}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                  <TouchableOpacity style={styles.button} onPress={() => alert(`${item.name} added to cart`)}>
              <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
                </View>


              </View>
            ))}
      </ScrollView>
    );
  }
 