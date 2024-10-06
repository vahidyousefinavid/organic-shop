import { Grid, Link, Typography, TextField, Button } from '@material-ui/core'
import React, { useState, useEffect, useContext } from 'react'
import useStyles from './AddProduct.styles'
import BasItem from '../../componenets/item/BasItem'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import InfiniteScroll from 'react-infinite-scroll-component'
import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Switch from '@mui/material/Switch'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined'
import AddIcCallIcon from '@mui/icons-material/AddIcCall'
import PrintIcon from '@mui/icons-material/Print'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddIcon from '@mui/icons-material/Add'
import Autocomplete from '@material-ui/lab/Autocomplete'
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { CartContext } from '../../contexts/CartContext'

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
}))

const sorts = [
    {
        value: 'dairy',
        label: 'لبنیات',
    },
    {
        value: 'beverages',
        label: 'نوشیدنی',
    },
    {
        value: 'ready-food',
        label: 'کنسرو،غذای آماده و منجمد',
    },
    {
        value: 'junk-food',
        label: 'تنقلات',
    },
    {
        value: 'flavor',
        label: 'چاشنی و افزودنی ها',
    },
    {
        value: 'health',
        label: 'آرایشی و بهداشتی',
    },
    {
        value: 'breakfast',
        label: 'صبحانه',
    },
    {
        value: 'nuts',
        label: 'خشکبار، دسر و شیرینی',
    },
    {
        value: 'baby',
        label: 'کودک و نوزاد',
    },
    {
        value: 'food-bread',
        label: 'خواربار و نان',
    },
    {
        value: 'protein',
        label: 'مواد پروتئینی',
    },
    {
        value: 'washer',
        label: 'دستمال و شوینده',
    },
];

export default function AddBas() {
  
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    const defaultProps = {
        options: ostan.map((option) => option.value),

        getOptionLabel: (option) => option,
    }
    // const flatProps = {
    //     options: ostan.map(('')),
    //     options: shahr.map(('')),
    // }

    const [ostanValue, ostanSetValue] = React.useState('')
    const [sort, setSort] = React.useState();

    const handleChange = (event) => {
        setSort(event.target.value);

    };
    const [underSort, setUnderSort] = useState();

    const handleChangeU = (event) => {
        setUnderSort(event.target.value);

    };

    const [title, setTitle] = useState();
    function AddProduct() {
        try {


            const main = document.querySelector("#main").files[0]

            const title = title
            const sort = sort
            const underSort = underSort
            const price = document.querySelector("#price").value
            const desc = document.querySelector("#desc").value
            const shoper = document.querySelector("#shoper").value
            const code = document.querySelector("#code").value
            const stock = document.querySelector("#stock").value
            const takhfif = document.querySelector("#takhfif").value

            const formData = new FormData()
            formData.append("main", main)

            formData.append("title", title)
            formData.append("sort", sort)
            formData.append("underSort", underSort)
            formData.append("price", price)
            formData.append("desc", desc)
            formData.append("shoper", shoper)
            formData.append("code", code)
            formData.append("stock", stock)
            formData.append("takhfif", takhfif)


            axios.post("https://api.balamala.ir/adminPanel/addProduct",
                formData,
                {
                    headers: {
                        "X-AUTH-TOKEN": localStorage.getItem('token')
                    }
                }
            )

                .then(res => {

                    alert("با موفقیت ذخیره شد")
                    // window.location.assign("http://localhost:3001/")
                    console.log(res)

                })
                .catch((err) => {
                    console.log(err)
                })
        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <Grid className={classes.rootShop}>
            <Typography>آپلود محصول جدید</Typography>
            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}> عکس اصلی</Typography>
                <input id='main' type='file' className={classes.MainInput} ></input>

            </Grid>

            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}>اسم محصول  </Typography>
                <TextField id="title"
                    label="توضیحات"
                    onChange={(event) => setTitle(event.target.value)} multiline
               
                    placeholder='مثال:سس 250گرمی کچاپ'
                    variant="standard" className={classes.MainInput} ></TextField>

            </Grid>
    
            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}>دسته بندی اصلی   </Typography>

                <TextField
                    id="sort"
                    select
                    label="دسته بندی"
                    placeholder="دسته بندی"
                    multiline
                    value={sort}
                    variant="standard"
                    className={classes.MainInput}
                    onChange={handleChange}
                    helperText="دسته بندی"

                >
                    {sorts.map((option) => (
                        <MenuItem className={classes.MainInput} key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Typography className={classes.mainTypo}>زیر دسته   </Typography>

                <FormControl className={classes.MainInput}   >
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                        className={classes.MainInput}
                        labelId="demo-simple-select-label"
                        id="underSort"
                        value={underSort}
                        label="دسته بندی"
                        placeholder="زیردسته"
                        onChange={handleChangeU}
                    // color='#fff'
                    >
                        <ListSubheader>لبنیات</ListSubheader>
                        <MenuItem value={'999'}>شیر</MenuItem>
                        <MenuItem value={'1000'}>پنیر</MenuItem>
                        <MenuItem value={'1001'}>ماست</MenuItem>
                        <MenuItem value={'1002'}>دوغ</MenuItem>
                        <MenuItem value={'1003'}>کره</MenuItem>
                        <MenuItem value={'1004'}>خامه</MenuItem>
                        <MenuItem value={'1005'}>کشک</MenuItem>
                        <ListSubheader>نوشیدنی</ListSubheader>
                        <MenuItem value={'1006'}>نوشابه</MenuItem>
                        <MenuItem value={'1007'}>ماءالشعیر</MenuItem>
                        <MenuItem value={'1008'}>آبمیوه</MenuItem>
                        <MenuItem value={'1009'}>چای و دمنوش</MenuItem>
                        <MenuItem value={'1010'}>آب</MenuItem>
                        <MenuItem value={'1011'}>قهوه و هات چاکلت</MenuItem>
                        <MenuItem value={'1012'}>نوشیدنی انرژی زا</MenuItem>
                        <MenuItem value={'1013'}>شربت</MenuItem>
                        <MenuItem value={'1014'}>عرقیجات</MenuItem>

                        <ListSubheader>خشکبار و دسر و شیرینی</ListSubheader>
                        <MenuItem value={'1015'}>دسر</MenuItem>
                        <MenuItem value={'1016'}>آجیل</MenuItem>
                        <MenuItem value={'1017'}>خرما</MenuItem>
                        <MenuItem value={'1018'}>ژله </MenuItem>
                        <MenuItem value={'1019'}>خشکبار</MenuItem>
                        <MenuItem value={'1020'}>پودر کیک و پنکیک</MenuItem>
                        <MenuItem value={'1021'}>انواع شیرینی</MenuItem>

                        <ListSubheader>کودک و نوزاد</ListSubheader>
                        <MenuItem value={'1022'}>پوشک کودک</MenuItem>
                        <MenuItem value={'1023'}>مواد غذایی کودک</MenuItem>
                        <MenuItem value={'1024'}>بهداشت کودک</MenuItem>
                        <MenuItem value={'1025'}>لوازم کودک و نوزاد </MenuItem>
                        <MenuItem value={'1026'}>اسباب بازی کودک</MenuItem>
                        
                        <ListSubheader>خواربار و نان</ListSubheader>
                        <MenuItem value={'1027'}>روغن</MenuItem>
                        <MenuItem value={'1028'}>ماکارونی و لازانیا و رشته</MenuItem>
                        <MenuItem value={'1029'}>رب</MenuItem>
                        <MenuItem value={'1030'}>حبوبات و سویا </MenuItem>
                        <MenuItem value={'1031'}>انوان نان</MenuItem>
                        <MenuItem value={'1032'}>برنج</MenuItem>
                        <MenuItem value={'1033'}>قند و شکر و نبات</MenuItem>
                        <MenuItem value={'1034'}>پودر سوخاری و آرد</MenuItem>
                        <MenuItem value={'1035'}>غلات </MenuItem>
                        <MenuItem value={'1036'}>انواع خمیر</MenuItem>

                        <ListSubheader>مواد پروتئینی</ListSubheader>
                        <MenuItem value={'1037'}>تخم مرغ و ماکیان</MenuItem>
                        <MenuItem value={'1038'}>مرغ</MenuItem>
                        <MenuItem value={'1039'}>گوشت قرمز</MenuItem>
                        <MenuItem value={'1040'}>ماهی و میگو </MenuItem>
                        <MenuItem value={'1041'}>سوسیس و کاباس</MenuItem>

                        <ListSubheader>کنسرو و غذای آماده</ListSubheader>
                        <MenuItem value={'1042'}>تن ماهی</MenuItem>
                        <MenuItem value={'1043'}>غذای آماده مصرف</MenuItem>
                        <MenuItem value={'1044'}>غذای نیمه آماده</MenuItem>
                        <MenuItem value={'1045'}>کنسرو و کمپوت </MenuItem>
                        <MenuItem value={'1046'}>فراورده های منجمد و یخچالی</MenuItem>

                        <ListSubheader>دستمال و شوینده</ListSubheader>
                        <MenuItem value={'1047'}>دستمال کاغذی</MenuItem>
                        <MenuItem value={'1048'}>دستمال حوله ای و آشپزخانه</MenuItem>
                        <MenuItem value={'1049'}>پاک کننده و ضد عفونی کننده سرویس بهداشتی</MenuItem>
                        <MenuItem value={'1050'}>شستشوی ظروف </MenuItem>
                        <MenuItem value={'1051'}>نظافت خانه و آشپزخانه</MenuItem>
                        <MenuItem value={'1052'}>شستشوی لباس</MenuItem>
                        <MenuItem value={'1053'}>فوم و مایع دستشویی</MenuItem>
                        <MenuItem value={'1054'}>ضد عفونی کننده سطوح و میوه</MenuItem>


                        <ListSubheader>آرایشی و بهداشتی</ListSubheader>
                        <MenuItem value={'1055'}>محصولات آرایشی</MenuItem>
                        <MenuItem value={'1056'}>بهداشت و مراقبت صورت</MenuItem>
                        <MenuItem value={'1057'}>شامپو و مراقبت مو</MenuItem>
                        <MenuItem value={'1058'}>آرایش مو </MenuItem>
                        <MenuItem value={'1059'}>بهداشت و مراقبت بدن</MenuItem>
                        <MenuItem value={'1060'}>بهداشت دهان</MenuItem>
                        <MenuItem value={'1061'}>اصلاح صورت و بدن</MenuItem>
                        <MenuItem value={'1062'}>بهداشت جنسی</MenuItem>
                        <MenuItem value={'1063'}>اسپری و ضد تعریق </MenuItem>
                        <MenuItem value={'1064'}>بهداشت زنان</MenuItem>

                        <ListSubheader>صبحانه</ListSubheader>
                        <MenuItem value={'1065'}>عسل</MenuItem>
                        <MenuItem value={'1066'}>مربا</MenuItem>
                        <MenuItem value={'1067'}>حلوا ارده و شیره</MenuItem>
                        <MenuItem value={'1068'}>شکلات صبحانه </MenuItem>
                        <MenuItem value={'1069'}>غلات صبحانه</MenuItem>
                        <MenuItem value={'1070'}>کره بادام زمینی</MenuItem>


                        <ListSubheader>تنقلات</ListSubheader>
                        <MenuItem value={'1071'}>بیسکویت و ویفر</MenuItem>
                        <MenuItem value={'1072'}>چیپس</MenuItem>
                        <MenuItem value={'1073'}>کیکی و کلوچه</MenuItem>
                        <MenuItem value={'1074'}>پفک و اسنک </MenuItem>
                        <MenuItem value={'1075'}>شکلات و آبنبات</MenuItem>
                        <MenuItem value={'1076'}>پاستیل و آدامس</MenuItem>
                        <MenuItem value={'1077'}>آجیل تک و مغز آجیل</MenuItem>
                        <MenuItem value={'1078'}>پاپ کورن و گندمک</MenuItem>
                        <MenuItem value={'1079'}>آلوچه و لواشک </MenuItem>


                        <ListSubheader>چاشنی و افزودنی</ListSubheader>
                        <MenuItem value={'1080'}>سس</MenuItem>
                        <MenuItem value={'1081'}>ادویه</MenuItem>
                        <MenuItem value={'1082'}>خیارشور و زیتون</MenuItem>
                        <MenuItem value={'1083'}>آبلیمو و سرکه و آبغوره </MenuItem>
                        <MenuItem value={'1084'}>ترشی و شور</MenuItem>
                        <MenuItem value={'1085'}>افزودنی های شیرینی پزی</MenuItem>
                        <MenuItem value={'1086'}>زعفران</MenuItem>
                        <MenuItem value={'1087'}>سبزیجات خشک و سرخ شده</MenuItem>
                        <MenuItem value={'1088'}>سایر افزودنی ها </MenuItem>



                    </Select>
                </FormControl>

            </Grid>
            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}> قیمت   </Typography>
                <TextField id="price"
                    label="قیمت"
                    placeholder="قیمت به تومان"
                    multiline
                    type='number'

                    variant="standard" className={classes.MainInput} ></TextField>

            </Grid>
            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}>توضیحات  </Typography>
                <TextField id="desc"
                    label="توضیحات"
                    placeholder="توضیحات"
                    multiline

                    variant="standard" className={classes.MainInput} ></TextField>

            </Grid>
            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}>فروشنده  </Typography>
                <TextField id="shoper"
                    label="فروشنده"
                    placeholder="فروشنده"
                    multilineو

                    variant="standard" className={classes.MainInput} ></TextField>

            </Grid>
            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}>کد محصول  </Typography>
                <TextField id="code"
                    label="کد محصول"
                    placeholder="کد محصول"
                    multilineو

                    variant="standard" className={classes.MainInput} ></TextField>

            </Grid>

            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}>تعداد موجود </Typography>
                <TextField id="stock"
                    label="تعداد"
                    placeholder="تعداد"
                    multilineو

                    variant="standard" className={classes.MainInput} ></TextField>

            </Grid>

            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}>تخفیف </Typography>
                <TextField id="takhfif"
                    label="قیمت با تخفیف"
                    placeholder="به تومان"
                    multilineو

                    variant="standard" className={classes.MainInput} ></TextField>
                <Button onClick={AddProduct} variant='contained' className={classes.MainButton}>اضافه کردن محصول جدید</Button>
            </Grid>
            <Grid className={classes.updateMain}>
                <Autocomplete className={classes.OstanInput}
                    {...defaultProps}
                    id="ostan"
                    value={ostanValue}
                    onChange={(event, newValue) => {
                        ostanSetValue(newValue)
                    }}
                    renderInput={(params) => <TextField {...params} className={classes.fieldInput} label="استان " margin="normal" />}
                />
            </Grid>


        </Grid>

    )
}
const ostan = [

    { value: 'آذربایجان شرقی', lable: 1 },
    { value: 'آذربایجان غربی', lable: 2 },
    { value: 'اردبیل', lable: 3 },
    { value: 'اصفهان', lable: 4 },
    { value: 'البرز', lable: 5 },
    { value: 'ایلام', lable: 6 },
    { value: 'بوشهر', lable: 7 },
    { value: 'تهران', lable: 8 },
    { value: 'چهارمحال و بختیاری', lable: 9 },
    { value: 'خراسان جنوبی', lable: 10 },
    { value: 'خراسان رضوی', lable: 11 },
    { value: 'خراسان شمالی', lable: 12 },
    { value: 'خوزستان', lable: 13 },
    { value: 'زنجان', lable: 14 },
    { value: 'سمنان', lable: 15 },
    { value: 'سیستان و بلوچستان', lable: 16 },
    { value: 'فارس', lable: 17 },
    { value: 'قزوین', lable: 18 },
    { value: 'قم', lable: 19 },
    { value: 'کردستان', lable: 20 },
    { value: 'کرمانشاه', lable: 21 },
    { value: 'کرمان', lable: 22 },
    { value: 'کهکیلویه و بویراحمد', lable: 23 },
    { value: 'گلستان', lable: 24 },
    { value: 'گیلان', lable: 25 },
    { value: 'لرستان', lable: 26 },
    { value: 'مازندران', lable: 27 },
    { value: 'هرمزگان', lable: 28 },
    { value: 'مرکزی', lable: 29 },
    { value: 'همدان', lable: 30 },
    { value: 'یزد', lable: 31 },
]
