import Cat from '../../images/cat.svg'
import './Card.css'

export default function Card(props) {

    const { product, portions, mouses, happiness, mass, selected, inStock } = props

    return (
        <div className="item">
            <div className="item__card">
                <div className='card__infoContainer'>
                    <div className="card__info">
                        <p className='info__viands'>
                            Сказочное заморское яство
                        </p>
                        <h2 className='info__title'>
                            Нямушка
                        </h2>
                        <p className='info__product'>
                            c {product}
                        </p>
                        <p className='info__portions'>
                            {portions} порций
                        </p>
                        <p className='info__mouses'>
                            {mouses} {
                                mouses > 1 ?
                                    mouses < 5 ? 'мыши' : 'мышей'
                                    : 'мышь'
                            } в подарок
                        </p>
                        {happiness &&
                            <p className='info__happiness'>
                                заказчик доволен
                            </p>
                        }
                    </div>
                </div>

                <div className="card__weight">
                    <div className='card__cat'>
                        <img src={Cat} alt="cat" />
                    </div>
                    <div className='weight__total'>
                        <p className='total__number'>
                            {mass}
                        </p>
                        <p className='total__kg'>
                            кг
                        </p>
                    </div>
                </div>
            </div>
            <p className="item__bottom">
                Чего сидишь? Порадуй котэ, купи.
            </p>
        </div>
    )
}