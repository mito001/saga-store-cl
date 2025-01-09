import React from 'react';
import Link from 'next/link';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Tooltip } from '@mui/material';

export default function ProductItem({ product }) {
  return (
    <Tooltip title={product.description} placement="top" arrow>
      <Card className="mb-4">
        <Link href={`/product/${product.slug}`} passHref>
          <CardActionArea>
            <CardMedia 
              component="img"
              image={product.image}
              title={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography variant="h6" color="primary">
                ${product.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Tooltip>
  );
}