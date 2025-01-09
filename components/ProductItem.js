import React from 'react';
import Link from 'next/link';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Tooltip } from '@mui/material';

export default function ProductItem({ product }) {
  // Generar una descripción de ejemplo basada en el nombre del producto
  const sampleDescription = `${product.name} - Una opción perfecta para cualquier ocasión. Calidad garantizada.`;

  return (
    <Card className="mb-4">
      <Tooltip title={sampleDescription} placement="top" arrow>
        <Link href={`/product/${product.slug}`} passHref>
          <CardActionArea>
            <CardMedia 
              component="img"
              image={product.image}
              title={product.name}
            />
          </CardActionArea>
        </Link>
      </Tooltip>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}