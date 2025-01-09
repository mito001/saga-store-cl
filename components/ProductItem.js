
import Link from 'next/link'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

export default function ProductItem({ product }) {
  return (
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
            <Typography variant="body2" color="textSecondary" component="p" className="mb-2">
              {product.description.slice(0, 80)}...
            </Typography>
            <Typography variant="h6" color="primary">
              ${product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}
