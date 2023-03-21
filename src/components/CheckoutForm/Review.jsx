import React from 'react';
import {
  Typography,
  List,
  ListItemText,
  ListItem,
  CardMedia,
} from '@material-ui/core';
const Review = ({ checkoutToken }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Récapitulatif de la commande
      </Typography>
      <List disablePadding>
        {checkoutToken.line_items.map((product) => (
          <ListItem className="py-[10px]" key={product.name}>
            <ListItemText
              primary={product.name}
              secondary={`Quantite: ${product.quantity}`}
            />
            <Typography variant="h6">
              {product.price.formatted_with_symbol}
            </Typography>

            <CardMedia image={product.url} alt={product.name} />
          </ListItem>
        ))}
        <ListItem className="py-[10px]">
          <ListItemText primary="Total">
            <Typography variant="subtitle1" className="font-semibold">
              {checkoutToken.subtotal.formatted_with_symbol}
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
