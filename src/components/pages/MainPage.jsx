import Card from '../card/Card'
import Adaptive from '../adaptive/Adaptive'
import './MainPage.css'

export default function MainPage() {


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
                />
                <Card
                    product='рыбой'
                    portions={40}
                    mouses={2}
                    happiness={false}
                    mass='2'
                />
                <Card
                    product='курой'
                    portions={100}
                    mouses={5}
                    happiness={true}
                    mass='5'
                />
            </section>
        </Adaptive>
    )
}