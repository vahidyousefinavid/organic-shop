import React, { useState } from 'react'
import './index.css'
import { Button } from '@material-ui/core'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FestivalIcon from '@mui/icons-material/Festival';

function BottomBox() {
    function Item({ title, icon }) {
        return <div className='BottomBoxItem'>
            {icon}
            <text className='ItemText'>{title}</text>
            {icon ? null : <ExpandMoreIcon />}
        </div>
    }
    const [showUnderMenu, setShowUnderMenu] = useState(false)
    return (
        <div className='BottomBoxRoot'>
            <div className='BottomBoxCategorty'>
                <Button onMouseOver={() => {
                    console.log('12');
                    setShowUnderMenu(true)
                }}
                    onMouseOutCapture={() => {
                        setShowUnderMenu(false)
                    }} style={{
                        background: 'orange',
                        position: 'relative'
                    }} className='BottomBoxCategortyBt'><text className='BottomBoxCategortyText'>دسته بندی</text>
                    <ExpandMoreIcon />
                    <div style={{
                        display: 'flex',
                        position: 'absolute',
                        width: 250,
                        maxHeight: showUnderMenu ? 400 : 0,
                        overflow: 'hidden',
                        top: 40,
                        paddingTop: 12,
                        boxShadow: showUnderMenu ? 'rgb(0 0 0 / 4%) 0px 2px 24px, rgb(0 0 0 / 5%) 0px 8px 28px' : 'none',
                        transition:'0.5s',
                    }}>
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#fff',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            borderRadius: 9,
                            boxShadow: showUnderMenu ? 'rgb(0 0 0 / 4%) 0px 2px 24px, rgb(0 0 0 / 5%) 0px 8px 28px' : 'none',
                            paddingBottom: 12

                        }}>
                            <div className='CategoryDivText'>
                                <text className='TextOne'>خوار و بار</text>
                            </div>
                            <div className='CategoryDivText'>
                                <text className='TextOne'>حبوبات</text>
                            </div>
                            <div className='CategoryDivText'>
                                <text className='TextOne'>لبنیات</text>
                            </div>
                            <div className='CategoryDivText'>
                                <text className='TextOne'>خشکبار</text>
                            </div>
                            <div className='CategoryDivText'>
                                <text className='TextOne'> آجیل</text>
                            </div>
                        </div>
                    </div>
                </Button>

            </div>
            <div className='BottomBoxMiddle'>

                <Item icon={<FestivalIcon style={{ width: 20 }} />} title={'جشنواره'} />
                <Item title={'خوار و بار'} />
                <Item title={'حبوبات'} />
                <Item title={'لبنیات'} />
                <Item title={'خشکبار'} />
                <Item title={'آجیل'} />
                <Item title={'آجیل'} />

            </div>
            <div className='BottomBoxLeft'>
                <text className='PopularText'>پرطرفدارها</text>
            </div>
        </div>
    )
}

export default BottomBox