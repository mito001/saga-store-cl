import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';

const DescriptionOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: theme.spacing(2),
  opacity: 0,
  transition: 'opacity 0.3s',
  '&:hover': {
    opacity: 1,
  },
}));

export default function ProductItem({ product }) {
  const [showDescription, setShowDescription] = useState(false);

  // Generar una descripción de ejemplo basada en el nombre del producto
  const sampleDescription = `${product.name} - Una opción perfecta para cualquier ocasión. Calidad garantizada.`;

  return (
    <Card className="mb-4">
      <Link href={`/product/${product.slug}`} passHref>
        <CardActionArea>
          <div style={{ position: 'relative' }}>
            <CardMedia
              component="img"
              image={product.image}
              title={product.name}
              onMouseEnter={() => setShowDescription(true)}
              onMouseLeave={() => setShowDescription(false)}
            />
            {showDescription && (
              <DescriptionOverlay>
                <Typography variant="body2">{sampleDescription}</Typography>
              </DescriptionOverlay>
            )}
          </div>
        </CardActionArea>
      </Link>
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