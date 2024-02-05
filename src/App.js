import React from 'react';


 const tableCardsItems = [
  {
    id:1,
    name:'Item1',
    imageUrl:'https://ibb.co/TYrSKtw',
    description:'this is image 1'
  },
  {
    id:2,
    name:'Item2',
    imageUrl:'https://ibb.co/6gnrgf3',
    description:'this is image 2'
  },
  {
    id:3,
    name:'Item3',
    imageUrl:'https://ibb.co/drwtqtP',
    description:'this is image 3'
  },
 ];

 const ItemTable = ({ tablecardsItems }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {tableCardsItems.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ItemTable;
