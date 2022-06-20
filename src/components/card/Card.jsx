import Cat from '../../images/cat.svg'
import './Card.css'

export default function Card(props) {

    const {
        product,
        portions,
        mouses,
        happiness,
        mass,
        select,
        isSelected,
        mouseEnter,
        mouseOut,
        isMouseEnter,
        isInStock,
        changeStock,
    } = props


    return (
        <div className="item">
            <div className={
                isInStock ?
                    isSelected ?
                        'item__card__selected' :
                        'item__card'
                    :
                    'item__card__outOfStock'
            }
                onClick={select}
                onMouseEnter={isSelected ? mouseEnter : null}
                onMouseLeave={mouseOut}
            >
                <div className='card__infoContainer'>
                    <div className="card__info">
                        {isInStock ?
                            isSelected ?
                                isMouseEnter ?
                                    <p className='info__viands__selected' >
                                        Котэ не одобряет?
                                    </p>
                                    :
                                    <p className='info__viands'>
                                        Сказочное заморское яство
                                    </p>
                                :
                                <p className={'info__viands'}>
                                    Сказочное заморское яство
                                </p>
                            :
                            <p className={'info__viands__outOfStock'}>
                                Сказочное заморское яство
                            </p>
                        }

                        <h2 className={
                            isInStock ?
                                'info__title' :
                                'info__title__outOfStock'
                        }>
                            Нямушка
                        </h2>
                        <p className={
                            isInStock ?
                                'info__product' :
                                'info__product__outOfStock'
                        }>
                            c {product}
                        </p>
                        <p className={
                            isInStock ?
                                'info__portions' :
                                'info__portions__outOfStock'
                        }>
                            {portions} порций
                        </p>
                        <p className={
                            isInStock ?
                                'info__mouses' :
                                'info__mouses__outOfStock'
                        }>
                            {mouses} {
                                mouses > 1 ?
                                    mouses < 5 ? 'мыши' : 'мышей'
                                    : 'мышь'
                            } в подарок
                        </p>
                        {happiness &&
                            <p className={
                                isInStock ?
                                    'info__happiness' :
                                    'info__happiness__outOfStock'
                            }>
                                заказчик доволен
                            </p>
                        }
                    </div>
                </div>

                <div className="card__weight">
                    <div className={
                        isInStock ?
                            'card__cat' :
                            'card__cat__outOfStock'
                    }>
                        <img src={Cat} alt="cat" />
                    </div>
                    <div className={
                        isInStock ?
                            isSelected ?
                                'weight__total__selected' :
                                'weight__total' :
                            'weight__total__outOfStock'
                    }>
                        <p className='total__number'>
                            {mass}
                        </p>
                        <p className='total__kg'>
                            кг
                        </p>
                    </div>
                </div>
            </div>
            <div className="item__bottom">
                {
                    isInStock ?
                        isSelected ?
                            <div className='bottom__select'>
                                <p>
                                    {product === 'фуа-гра' ?
                                        'Печень утки разварная с артишоками.' :
                                        product === 'рыбой' ?
                                            'Головы щучьи с чесноком да свежайшая сёмгушка.' :
                                            'Филе из цыплят с трюфелями в бульоне.'
                                    }
                                </p>
                            </div>
                            :
                            <div className='bottom__notSelect '>
                                <p className='bottom__sit'>
                                    Чего сидишь? Порадуй котэ,&nbsp;
                                </p>
                                <p className='bottom__buy' onClick={select}>
                                    купи.
                                </p>
                            </div>
                        :
                        <div className='bottom__outOfstock'>
                            Печалька, с {product} закончился.
                        </div>
                }
            </div>
            <button className='changeStockButton' onClick={changeStock}>
                Кликни!
            </button>
        </div>
    )
}