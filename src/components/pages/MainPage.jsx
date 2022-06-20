import Card from '../card/Card'
import Adaptive from '../adaptive/Adaptive'
import './MainPage.css'
import { useState } from 'react'

export default function MainPage() {

    const [isSelectedFoie, setIsSelectedFoie] = useState(false);
    const [isSelectedFish, setIsSelectedFish] = useState(false);
    const [isSelectedChicken, setIsSelectedChicken] = useState(false);
    const [isMouseEnterFoie, setIsMouseEnterFoie] = useState(false)
    const [isMouseEnterFish, setIsMouseEnterFish] = useState(false)
    const [isMouseEnterChicken, setIsMouseEnterChicken] = useState(false)

    const handleSelectFoie = () => {
        setIsSelectedFoie(!isSelectedFoie)
    }
    const handleSelectFish = () => {
        setIsSelectedFish(!isSelectedFish)
    }
    const handleSelectChicken = () => {
        setIsSelectedChicken(!isSelectedChicken)
    }

    const mouseEnterFoie = () => {
        setIsMouseEnterFoie(true)
    }
    const mouseOutFoie = () => {
        setIsMouseEnterFoie(false)
    }

    const mouseEnterFish = () => {
        setIsMouseEnterFish(true)
    }
    const mouseOutFish = () => {
        setIsMouseEnterFish(false)
    }

    const mouseEnterChicken = () => {
        setIsMouseEnterChicken(true)
    }
    const mouseOutChicken = () => {
        setIsMouseEnterChicken(false)
    }


    return (
        <Adaptive className='assortment' tagname={'article'}>
            <h1 className='assortment__title'>
                Ты сегодня покормил кота?
            </h1>

            <section className='assortment__cards'>
                <Card
                    product='фуа-гра'
                    portions={10}
                    mouses={1}
                    happiness={false}
                    mass='0,5'
                    select={handleSelectFoie}
                    isSelected={isSelectedFoie}
                    mouseEnter={mouseEnterFoie}
                    mouseOut={mouseOutFoie}
                    isMouseEnter={isMouseEnterFoie}
                />
                <Card
                    product='рыбой'
                    portions={40}
                    mouses={2}
                    happiness={false}
                    mass='2'
                    select={handleSelectFish}
                    isSelected={isSelectedFish}
                    mouseEnter={mouseEnterFish}
                    mouseOut={mouseOutFish}
                    isMouseEnter={isMouseEnterFish}
                />
                <Card
                    product='курой'
                    portions={100}
                    mouses={5}
                    happiness={true}
                    mass='5'
                    select={handleSelectChicken}
                    isSelected={isSelectedChicken}
                    mouseEnter={mouseEnterChicken}
                    mouseOut={mouseOutChicken}
                    isMouseEnter={isMouseEnterChicken}
                />
            </section>
        </Adaptive>
    )
}