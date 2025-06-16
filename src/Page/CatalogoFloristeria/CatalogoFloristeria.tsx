import { useState } from 'react';
import { Button, Card, CardContent, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { Grid, Typography, Chip } from '@mui/material';
import uno from '../../assets/1.jpg'
import dos from '../../assets/2.jpg'
import tres from '../../assets/3.jpg'
import cuatro from '../../assets/4.jpg'
import cinco from '../../assets/5.jpg'
import seis from '../../assets/6.jpg'
import siete from '../../assets/7.jpg'
import ocho from '../../assets/8.jpg'
import nueve from '../../assets/9.jpg'
import diez from '../../assets/10.jpg'
import once from '../../assets/11.jpg'
import doce from '../../assets/12.jpg'
import trece from '../../assets/13.jpg'
import fondo from '../../assets/fondoflores.png'

const flowers = [
    { id: 1, name: 'Caja - Rosas diversos colores', price: 2850, category: 'Rosas', image: uno },
    { id: 2, name: 'Caja - Rosa lila', price: 2850, category: 'Rosas', image: dos },
    { id: 3, name: 'Caja - Rosa multicolor (azul)', price: 4250, category: 'Multi-Color', image: tres },
    { id: 4, name: 'Caja - Rosa multicolor (negro)', price: 4250, category: 'Multi-Color', image: cuatro },
    { id: 5, name: 'Caja - Rosa multicolor (celeste)', price: 4250, category: 'Multi-Color', image: cinco },
    { id: 6, name: 'Caja - Limonium', price: 1590, category: 'Flores', image: seis },
    { id: 7, name: 'Caja - Baby', price: 2010, category: 'Flores', image: siete },
    { id: 8, name: 'Caja - Eucalipto', price: 1730, category: 'Hojas', image: ocho },
    { id: 9, name: 'Caja - Hypericum', price: 1850, category: 'Exótico', image: nueve },
    { id: 10, name: 'Caja - Hypericum', price: 1850, category: 'Exótico', image: diez },
    { id: 11, name: 'Caja - Hypericum', price: 1850, category: 'Exótico', image: once },
    { id: 12, name: 'Caja - Gerberas', price: 1590, category: 'Flores', image: doce },
    { id: 13, name: 'Caja - Veronicas', price: 1870, category: 'Exótico', image: trece },
];

const categorias = ['Todos', 'Rosas', 'Flores', 'Multi-Color', 'Hojas', 'Exótico'];

export default function CatalogoFloristeria() {
    const [filtro, setFiltro] = useState('Todos');
    const [busqueda, setBusqueda] = useState('');

    const floresFiltradas = flowers.filter((flor) => {
        const coincideCategoria = filtro === 'Todos' || flor.category === filtro;
        const coincideBusqueda = flor.name.toLowerCase().includes(busqueda.toLowerCase());
        return coincideCategoria && coincideBusqueda;
    });

    return (
        <div className="p-6">
            <Typography variant="h3" gutterBottom sx={{ margin: 2 }}>
                ForalGT 🌸
            </Typography>

            <div className="flex flex-wrap gap-4 mb-6" style={{ margin: 2 }}>
                {categorias.map((cat) => (
                    <Chip
                        sx={{ margin: 1 }}
                        key={cat}
                        label={cat}
                        color={filtro === cat ? 'primary' : 'default'}
                        onClick={() => setFiltro(cat)}
                        clickable
                    />
                ))}
            </div>

            <TextField
                label="Buscar flor..."
                variant="outlined"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                fullWidth
                className="mb-6"
            />

            <Grid container spacing={3}>
                {floresFiltradas.map((flor) => (
                    <Grid sx={{ margin: 2, backgroundImage: `${fondo}` }}  size={{xs: 12, sm: 6, md: 3}} key={flor.id}>
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Card className="rounded-2xl shadow-md" sx={{
                                backgroundImage: `url(${fondo})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                                backdropFilter: 'blur(2px)',
                                
                            }}
                            >
                                <img
                                    width={150}
                                    height={150}
                                    style={{ objectFit: 'cover', borderRadius: 5, margin: 5, borderColor: '#000000', border: 5 }}
                                    src={flor.image}
                                    alt={flor.name}
                                    className="w-full h-48 object-cover rounded-t-2xl"
                                />
                                <CardContent sx={{ backgroundColor: 'white' }}>
                                    <Typography variant="h6">{flor.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {flor.category}
                                    </Typography>
                                    <Typography variant="subtitle1" className="mt-2">
                                        Q{flor.price.toFixed(2)} GTQ
                                    </Typography>
                                    <Button
                                    sx={{ backgroundColor: '#f2c3bf' }}
                                    className="mt-4 w-full"
                                    variant="contained"
                                    component="a"
                                    href={`https://wa.me/50239960813?text=Hola%2C%20deseo%20hacer%20un%20pedido%20de%20${flor.name.replace(' ', '%20')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    Comprar
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
