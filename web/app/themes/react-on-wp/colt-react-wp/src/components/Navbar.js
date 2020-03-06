import React, { Component } from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

const GET_MENU_ITEMS = gql`
  {
    menuItems(where: {location: HEADER_MENU}) {
      nodes {
        label
        menuItemId
      }
    }
  }
`;

const Navbar = () => {

  let { loading, error, data } = useQuery(GET_MENU_ITEMS);
  if (loading) {
    console.log("loading nav");
  }

  if (error) {
    console.log(error);
  }

  if (data) {
    return (
      <div className="navbar">
        {data.menuItems.nodes.map(({ label, menuItemId }) => 
          <div className="menu-item" key={menuItemId}>
            {label}
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
    
}

export default Navbar;