import { Grid, TextField, Typography, Button } from '@material-ui/core'
import React from 'react'
import useStyles from './Hamisho.styles'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import FilledInput from '@mui/material/FilledInput'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import PropTypes from 'prop-types'
import { IMaskInput } from 'react-imask'
import NumberFormat from 'react-number-format'
import donation from '../../assets/images/donation.png'
import axios from 'axios'




const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props
    return (
        <IMaskInput
            {...other}
            mask="(#00) 000-0000"
            definitions={{
                '#': /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    )
})

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props

    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                })
            }}
            thousandSeparator
            prefix="تومان"
            isNumericString

        />
    )
})

NumberFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}


export default function HamishoPay() {
    const classes = useStyles()
    const [values, setValues] = React.useState({
        textmask: '(100) 000-0000',
        numberformat: '',
    })
    console.log(values.numberformat)
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    async function submit() {
        try {
            if (values.numberformat < 1000) {
                return alert('مبلغ حمایت نباید کمتر از 1000 تومان باشد')
            }

            const phone = document.querySelector("#phone").value
            const amount = values.numberformat







            const formData = new FormData()

            formData.append("phone", phone)
            formData.append("amount", amount)




            await axios.post("https://api.balamala.ir/Hamisho", formData)


                .then(res => {

                    const ccOrder = res.data





                    axios.get("https://api.balamala.ir/checkoutHamisho", {

                        params: {
                            CCOrder: ccOrder

                        }
                    })
                        .then(res => {
                            if (res.data.err === true) {
                                alert('مشکلی در ارتباط با سرور به وجود آمده است لطفا دوباره تلاش کنید')
                            }
                            else {

                                window.location.assign(res.data.Url)

                            }





                        }).catch(err => {
                            console.log(err)

                        })


                })
                .catch(err => {
                    console.log(err)
                    alert('فیلد ها را کامل پر کنید و دوباره امتحان کنید.')

                })

        }

        catch (err) {
            console.log(err)
        }
    }


    return (
        <Grid className={classes.rootPay}>
            <Typography></Typography>

            <Grid className={classes.addres}>
                <img alt='آدرس(رابین پوش)' className={classes.image} src={donation} ></img>
                <TextField className={classes.fieldInput} label="مبلغ حمایت"
                    value={values.numberformat}
                    onChange={handleChange}
                    name="numberformat"
                    id=""
                    lang='en'
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                    variant="standard" fullWidth  ></TextField>
                <TextField className={classes.fieldInput} placeholder='به زبان انگلیسی(لاتین)' lang='en' type='number' id="phone" label='شماره همراه(الزامی می باشد):' fullWidth  ></TextField>
                <Typography className={classes.text}>واریز وجه رو میونید از طریق کارت به کارت نیز انجام بدید

                </Typography>
                <Typography className={classes.text}>شماره حساب:6280231339960279</Typography>
                <Typography className={classes.text}> لطفا برای واریز کارت به کارت رسید پرداختی و شماره همراه رو نیز به شماره واتساپ 09182144970 ارسال کنید.</Typography>
                <div className={classes.typoF}>
                    <Typography variant='h5' className={classes.Utypo}>*هر که اندوه و مشکلی از مومنی برطرف کند خدا روز قیامت قلب او را شاد می کند.*
                        امام رضا(ع)</Typography>


                </div>

            </Grid>
            <Button variant='contained' size='large' className={classes.Button} onClick={submit}>واریز وجه حمایتی</Button>
        </Grid>
    )
}
