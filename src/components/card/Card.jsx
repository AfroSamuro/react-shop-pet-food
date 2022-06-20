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
        inStock
    } = props


    return (
        <div className="item">
            <div className={isSelected ? 'item__card__selected' : 'item__card'}
                onClick={select}
                onMouseEnter={isSelected ? mouseEnter : null}
                onMouseLeave={mouseOut}
            >
                <div className='card__infoContainer'>
                    <div className="card__info">
                        {isSelected ?
                            isMouseEnter ?
                                <p className='info__viands__selected' >
                                    Котэ не одобряет?
                                </p>
                                :
                                <p className='info__viands'>
                                    Сказочное заморское яство
                                </p>
                            :
                            <p className='info__viands'>
                                Сказочное заморское яство
                            </p>
                        }

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
                    <div className={isSelected ? 'weight__total__selected' : 'weight__total'}>
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
                {isSelected ?
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

                }
            </div>

        </div>
    )
}