import React from'react'

function Gallery (props) {
    console.log(props.cards);
    return (
        <>
        <div className='main-inner-container'>
            <p className="title">The Gallery</p>
            {   
                props.cards && props.cards.map &&
                props.cards.map(card => ( //props.cards.map is not a function then do the above.
                    <div key= {card.id} className='pic'>
                        <p>{card.caption}</p>
                        <img src={card.url} alt=""/>
                    </div>
                ))
            }
        </div>
        
        </>
    )
}

export default Gallery;