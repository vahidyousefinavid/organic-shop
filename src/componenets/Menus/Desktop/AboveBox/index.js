import React from 'react'
import './index.css'
import logo from '../../../../assets/images/logo.svg'
import { Autocomplete, TextField } from '@mui/material'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
function AboveBox() {
    return (
        <div className='AboveBoxRoot'>
            <Link to={'/'} className='AboveBoxDivLogo'>
                <img src={logo} className='AboveBoxLogo' />
                <text className='AboveBoxTextLogo'>
                    فروشگاه ارگانیک
                </text>
            </Link>
            <div className='AboveBoxMiddle'>
                <Autocomplete
                    size="small"
                    // value={Value}
                    // onChange={onChange}
                    // onKeyDown={onKeyDown}
                    select
                    loading
                    // disabled={disabled}
                    loadingText={<Typography variant='h5'>در حال پردازش ...</Typography>}
                    noOptionsText={'پیدا نشد'}
                    placeholder='جستجو کنید ...'
                    // onOpen={() => {
                    //     fillBasicData()
                    // }}
                    // getOptionLabel={(dataTerminology) => `${getOptionLabel ? dataTerminology[getOptionLabel] : dataTerminology.Title}`}
                    options={[]}
                    sx={{
                        width: '100%',
                        zIndex: 1,
                        borderRadius: 1,
                        background: '#e9e9e9'
                    }}
                    // renderInput={(params) => <TextField {...params} label="Controllable" />}

                    renderInput={(params) => <TextField
                        {...params}
                        // id={id}
                        // label={label}
                        dir='rtl'
                        placeholder='جستجو کنید ...'
                        // type={type}
                        // value={value}
                        // onChange={onChange}
                        sx={{
                            // borderRadius: 30,
                            display: 'flex',
                            width: '100%',
                            '& .MuiInputBase-root': {
                                height: '40px !important',
                                textAlign: 'center',
                                width: '100%',
                                // borderRadius: 30,
                                // background:'red'
                            },
                            '& .MuiInputBase-input': {
                                textAlign: 'right',
                                padding: '0px 35px !important',
                                fontSize: 12

                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                textAlign: 'right',
                                // borderRadius: 2,
                                fontSize: '16px',
                                border: 'none'
                            },
                            '& .MuiInputLabel-root': {
                                left: 'none !important',
                                flexDirection: 'row-reverse',
                                zIndex: -1,
                                opacity: 0,
                                fontSize: '16px !important',
                                paddingLeft: 3
                            },
                            ':before': {
                                content: "''",
                                position: 'absolute',
                                width: '100%',
                                bottom: 0,
                                backgroundColor: '#e9e9e9',
                                borderRadius: '0.5rem'
                            },
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    }
                />
            </div>
            <div className='AboveBoxLeft'>
                <PermIdentityIcon className='icon' />
                <FavoriteBorderIcon className='icon' />
                <Link className='LinkBasket' to={'/bag'}>
                    <ShoppingCartCheckoutIcon className='icon' />
                    <div>
                        <text className='AboveBoxBasketText'>سبد خرید</text>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AboveBox