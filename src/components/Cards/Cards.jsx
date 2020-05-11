import React from 'react';
import { Card,CardContent,Typography,Grid} from '@material-ui/core' 
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    console.log("API",confirmed,recovered,deaths,lastUpdate);
    if(!confirmed){
        return 'Loading...'
    }

     const cardData = [
         ['Infected',confirmed.value,'Number of infected people',styles.infected],
         ['Recovered',recovered.value,'Number of recovered people',styles.recovered],
         ['Deaths',deaths.value,'Number of Deaths',styles.deaths],
        
     ]
    return ( 
    <div className ={styles.container}>
          <Grid container spacing = {3} justify = "center">
             {  cardData.map((card,i) =>
             <React.Fragment>
               <Grid item component = {Card} xs={12} md ={3} className ={cx(styles.card,card[3])}>
                  <CardContent>
             <Typography color = "textSecondary" gutterBottom>{card[0]}</Typography>
                   <Typography varaint = "h5" component="h2">
                   <CountUp start = {0} end ={card[1]} duration = {4} separator = ','/>
                   </Typography>
                   <Typography color = "textSecondary">{new Date (lastUpdate).toDateString()}</Typography>
             <Typography variant ="body2" component="p">{card[2]}</Typography> 
                  </CardContent>
              </Grid>   
             </React.Fragment>
             
             )}
</Grid>
    </div> );
}
 
export default Cards;