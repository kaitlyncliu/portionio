import React from 'react';
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard';

export default function HomeScreen() {
  const [post, setPost] = React.useState(null);
  const getResponse = async () => {
    try {
      const res = await axios.get('api/restaurants/1')
      console.log(res.data)
      setPost(res.data);
    } catch(err) {
      console.log(err)
    }
  }
  getResponse()
  return (
    <RestaurantCard name={post.name}
                    address={post.address}
                    relativePortionSize={post.relativePortionSize}
                    image={post.image}>
    </RestaurantCard>
   
  );
}; 
