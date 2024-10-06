import { Grid, Typography, Hidden, Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import useStyles from './Hamisho.styles'
import baner from '../../assets/images/baner.png'
import baner2 from '../../assets/images/baner2.png'
import donation from '../../assets/images/donation.png'
import axios from 'axios'
export default function Hamisho() {
  const classes = useStyles()
  var date = new Date(Date.UTC(1401, 1, 1, 10, 10, 10))
  const [data, setData] = React.useState([])
  useEffect(() => {
    axios({
      url: ("https://api.balamala.ir/AllHamisho"),

      method: "GET"
    })


      .then(response =>
        setData(response.data),


      ).catch(err => {
        console.log(err)
      })



  }, [])

  const total = () => {
    var Data = data,
      sum = 0


    Data.forEach(function (item) {
      let PP = parseFloat(item.amount)

      sum += PP

    })
    return (sum)

  }


  return (
    <Grid className={classes.root}>
      <Grid className={classes.banerDiv}>
        <Hidden xsDown >
          <img src={baner} className={classes.baner}></img>
        </Hidden>
        <Hidden xlUp>
          <img src={baner2} className={classes.baner}></img>
        </Hidden>
      </Grid>
      <div className={classes.title}>
        <Typography className={classes.Typotitle}>مجموعه بالا مالا سعی در فراهم کردن بسته های حمایتی (سبد کالا حمایتی) برای افراد بی بضاعت ساکن شهرستان همدان را دارد لذا از شما همشهریان عزیز یاری می طلبیم و شما را به پویش #حامی شو دعوت میکنیم تا بتوانیم کمک رسانی را گسترده تر و افراد بیشتری را مورد حمایت قرار دهیم </Typography>
        <Button variant='contained' size='large' className={classes.Button} href='/hamishopay' >حمایت من <img src={donation} className={classes.donation}></img></Button>
      </div>
      <Grid className={classes.GridBig}>
        <Grid className={classes.Grid1}>
          <Typography variant='h3'>تعداد حمایت</Typography>
          <Typography className={classes.Typo} variant='h3'>{Intl.NumberFormat('ar-EG').format(data.length + 2)}</Typography>
        </Grid>
        <Grid className={classes.Grid1}>
          <Typography variant='h3'>مقدار حمایت</Typography>
          <Typography className={classes.Typo} variant='h3'> {Intl.NumberFormat('ar-EG').format(total() + 80000)} تومان</Typography>
        </Grid>
        <Grid className={classes.Grid1}>
          <Typography variant='h3'>  از تاریخ</Typography>
          <Typography className={classes.Typo} variant='h3'>{Intl.DateTimeFormat('ar-EG').format(date)}</Typography>
        </Grid>
      </Grid>
      <Grid>
        <Button variant='contained' size='large' className={classes.Button} href='/hamishopay'  >حمایت من <img src={donation} className={classes.donation}></img></Button>
      </Grid>
    </Grid>
  )
}
