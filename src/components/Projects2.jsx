/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({datas}) {

    const projects = datas.projects.map((proj,index)=>{
        
        return (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia 
                component="img"
                height="140"
                image={proj.images[0]}
                alt={proj.alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {proj.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {proj.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
    })
    return(
        <div>{projects}</div>
    )
    
}