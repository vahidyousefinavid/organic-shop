


//سبد خرید



import { Grid, Typography, TextField, Button } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import useStyles from './bag.styles'

import BagItem from './bagItem'
import BagIcon from '../../assets/images/bag.png'
import returnIcon from '../../assets/images/open-box.png'
import running from '../../assets/images/delivery-truck.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import { CartContext } from '../../contexts/CartContext'
import { LoginContext } from '../../contexts/LoginContext'



// import NumberFormat from 'react-number-format'

export default function Bag() {

    const classes = useStyles()
    const [expanded, setExpanded] = React.useState('')


    const { dispatch } = useContext(LoginContext)

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }

    const { cartData, totalPrice, count, totalWtakhfif, chooseOText, OText, setChooseOText } = useContext(CartContext)
    const url = 'https://api.balamala.ir/'
    const proUrl = '/product/'
    const [textInput, setTextInput] = useState('')
    var Price = Intl.NumberFormat('ar-EG').format(totalPrice(cartData))
    var takhfif = totalWtakhfif(textInput) === 0 ? '' : 'جمع کل همراه تخفیف:' + Intl.NumberFormat('ar-EG').format(totalWtakhfif(textInput)) + ' تومان '
    var gg = totalWtakhfif(textInput) === 0 ? '' : <div style={{ width: 80, height: 2, backgroundColor: 'red', position: 'absolute', right: '58%', top: 8 }}></div>

    const handleTextInputChange = event => {
        setTextInput(event.target.value)
    }

    // console.log(OText());
    localStorage.setItem('takhfifAmount', totalWtakhfif(textInput))
    localStorage.setItem('takhfifCode', textInput)
    return (
        <Grid className={classes.root} container>
            <Grid className={classes.nextRoot} container  >
                <Grid className={classes.bagGrid} >
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgb(220 220 220 / 62%)', padding: 9, height: 50, alignItems: 'center', borderRadius: 6 }} >
                        <Typography variant='h4' >سفارش های شما</Typography>
                        <img alt='سبد خرید (رابین پوش)' className={classes.bagClass} src={BagIcon} ></img>

                    </div>

                    {cartData.map((product) => <BagItem alt={product.title} href={`${proUrl}?place=${product._id}`} img={url + product.main} code={product.code} title={product.title} tedad={product.tedad} alt2={product.title} price={product.takhfif ? product.takhfif * product.tedad : product.price * product.tedad} id={product._id}></BagItem>)}
                </Grid>



                <Grid className={classes.valueGrid} direction='column' >
                    {count > 0 ? <div className={classes.chooseOrderDiv} >
                        <Button onClick={() => {
                            setChooseOText('2')
                            localStorage.setItem('OText', '2')
                        }} className={classes.chooseOrderButton} size='small' variant='contained'>ارسال ویژه</Button>
                        <Button onClick={() => {
                            setChooseOText('1')
                            localStorage.setItem('OText', '1')
                        }} className={classes.chooseOrderButton} size='small' variant='contained'>ارسال سریع</Button>
                        <Button onClick={() => {
                            setChooseOText('0')
                            localStorage.setItem('OText', '0')
                        }} className={classes.chooseOrderButton} size='small' variant='contained'>ارسال عادی</Button>

                    </div> : null}
                    {count > 0 ? <div className={classes.chooseOrderDiv2} >
                        <Typography> ارسال انتخابی</Typography>
                        <div className={classes.vcx} >
                            <Typography className={classes.vcxT} >{OText().type}</Typography>
                            <Typography className={classes.vcxT2} >{OText().time}</Typography>
                            <Typography className={classes.vcxT} >هزینه ارسال </Typography>
                            <Typography className={classes.vcxT2} >{Intl.NumberFormat('ar-EG').format(OText().price)} تومان</Typography>

                        </div>

                    </div> : null}
                    <div className={classes.value}>{gg} <Typography variant='h5' >جمع کل سفارش ها: {Price} تومان</Typography></div>
                    {totalPrice(cartData) < 0 ? <div className={classes.value}><Typography variant='h5' >هزینه ارسال: {Intl.NumberFormat('ar-EG').format(3000)} تومان</Typography></div> : <div className={classes.value}><Typography variant='h5' >هزینه ارسال: {Intl.NumberFormat('ar-EG').format(OText().price)} تومان </Typography></div>}
                    <div className={classes.takhfif}> <Typography variant='h4' > {takhfif} </Typography></div>
                    <div>{count === 0 ? <div><Button variant='contained' size='large' style={{ backgroundColor: 'rgb(0, 102, 255)', marginTop: 18, width: 233 }} ><Typography variant='h5' style={{ color: '#fff' }} >سبد شما خالی میباشد</Typography></Button></div> : <div><Button variant='contained' size='large' style={{ backgroundColor: 'rgb(0, 102, 255)', marginTop: 18, width: 233 }} href='/payment' ><Typography variant='h6' style={{ color: '#fff' }} >تکمیل سفارش</Typography></Button></div>} </div>
                    <Accordion className={classes.accordionCla} expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant='body1'>کد تخفیف </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className={classes.liClass} >
                                <TextField value={textInput} onChange={handleTextInputChange} className={classes.textField} ></TextField>
                                <Typography variant='h6' className={classes.notic}>فقط کافیست کد تخفیف را با دقت و توجه به حروف کوچک و بزرگ وارد کنید</Typography>
                                {/* <Button variant='contained' onClick={() => { totalWtakhfif(textInput) }} fullWidth className={classes.buttonField} >اعمال کد تخفیف</Button> */}
                            </ul>
                        </AccordionDetails>
                    </Accordion>


                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'space-between', justifyContent: 'space-between' }}>
                        <div style={{ width: 100, display: 'flex', flexDirection: 'column', marginTop: 27, justifyContent: 'center', alignItems: 'center' }} >
                            <a href='./' style={{ textDecoration: 'none', color: '#111', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                                <img alt='rabinpoosh' className={classes.returnIcon} src={returnIcon} ></img>
                                <Typography style={{ textAlign: 'center' }}>بسته بندی مناسب</Typography>
                            </a>
                        </div  >

                        <div style={{ width: 100, display: 'flex', flexDirection: 'column', marginTop: 27, marginRight: 9, justifyContent: 'center', alignItems: 'center' }}>
                            <a href='./' style={{ textDecoration: 'none', color: '#111', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }} >
                                <img alt='rabinpoosh.ir' src={running} className={classes.fastIcon} ></img>
                                <Typography style={{ textAlign: 'center' }} >تحویل سریع و آسان</Typography>
                            </a>
                        </div>
                    </div>

                </Grid>

            </Grid>
        </Grid>
    )
}

