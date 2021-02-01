import React from'react'

function Gallery (props) {
    console.log(props.cards);
    return (
        <>
        <div className='main-inner-container'>
            <p className="gallery-title">The Gallery</p>
            {   
                props.cards && props.cards.map &&
                props.cards.map(card => ( //props.cards.map is not a function then do the above.
                    <div key= {card.id} className='picCard'>
                        <p>{card.caption}</p>
                        <img src={card.url} alt="" className="pic"/>
                    </div>
                ))
            }
        </div>
        
        </>
    )
}

export default Gallery;