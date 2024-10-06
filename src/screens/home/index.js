import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import poster1 from '../../assets/images/poster1.jpg'
import poster2 from '../../assets/images/poster2.jpg'
import './index.css'
import CategoryItem from '../../componenets/CategoryItem'
import one from '../../assets/images/one.png'
import two from '../../assets/images/two.png'
import three from '../../assets/images/three.png'
import four from '../../assets/images/four.png'
import five from '../../assets/images/five.png'
import six from '../../assets/images/six.png'
import po1 from '../../assets/images/po1.png'
import po2 from '../../assets/images/po2.png'
import po3 from '../../assets/images/po3.png'
import po4 from '../../assets/images/po4.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import theme from '../../theme/theme'
import { Box } from '@mui/material'

export default function Home({ product, id, stock }) {
  const [width, setWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setWidth(window.innerWidth)
  }
  window.addEventListener('resize', handleResize)
  return (
    <Grid className='HomeRoot' style={{
      paddingTop: 180
    }} >
      <div className='HomePosterBox'>
        <Box sx={{
          display: 'flex',
          maxWidth: '50%',
          [theme.breakpoints.down('650')]: {
            maxWidth: '80%'
          }
        }}>
          <img src={poster2} className='HomePosterTwo'
            style={{
              maxWidth: '100%',
            }} />
        </Box>
        {width > 870 && <img src={poster1} className='HomePosterOne' />}

      </div>
      <div className='TitleBox' style={{
        paddingRight: 60
      }}>
        <text className='TitleText'>دسته بندی</text>
      </div>
      <div className='HomeCategoryBox' >
        <CategoryItem to={'/shop/:1'} title={'خوار و بار'} icon={<img className='CategoryIcon' src={one} />} />
        <CategoryItem to={'/shop/:2'} title={'حبوبات'} icon={<img className='CategoryIcon' src={two} />} />
        <CategoryItem to={'/shop/:3'} title={'لبنیات'} icon={<img className='CategoryIcon' src={three} />} />
        <CategoryItem to={'/shop/:4'} title={'خشکبار'} icon={<img className='CategoryIcon' src={five} />} />
        <CategoryItem to={'/shop/:5'} title={'آجیل'} icon={<img className='CategoryIcon' src={four} />} />
        <CategoryItem to={'/shop/:6'} title={'خوار و بار'} icon={<img className='CategoryIcon' src={six} />} />
      </div>
      <div className='TitleBox' style={{
        paddingRight: 60
      }}>
        <text className='TitleText'>محصولات جدید</text>
      </div>
      <div className='featuredProductBox'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'

        }}
      >
        <Swiper

          spaceBetween={30}
          slidesPerView={width < 380 ? 0.9 : width < 540 ? 1.2 : width < 635 ? 1.7 : width < 990 ? 2 : width < 1290 ? 3 : 4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide >
            <div className='swiperSlide'>
              <img src={po1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiperSlide'>
              <img src={po2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiperSlide'>
              <img src={po3} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiperSlide'>
              <img src={po4} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Grid>

  )
}