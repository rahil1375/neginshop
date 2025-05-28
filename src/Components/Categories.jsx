import React from 'react';

function Categories() {
    return (
        <div style={{padding:"2vw 4vw 2vw 4vw"}}>
           <div className="fos head">دسته بندی ها</div>
           <div className="content con">
                <div className="box bor"><a href=""><img className='boximg' src='src/images/cat1.png'></img></a><p className='pfos'>دورس</p></div>
                <div className="box bor"><a href=""><img className='boximg' src='src/images/cat2.png'></img></a><p className='pfos'>هودی</p></div>
                <div className="box bor"><a href=""><img className='boximg' src='src/images/cat3.png'></img></a><p className='pfos'>تیشرت</p></div>
                <div className="box bor"><a href=""><img className='boximg' src='src/images/cat1.png'></img></a><p className='pfos'>هودی</p></div>
                <div className="box bor"><a href=""><img className='boximg' src='src/images/cat1.png'></img></a><p className='pfos'>هودی</p></div>
                <div className="box bor"><a href=""><img className='boximg' src='src/images/cat1.png'></img></a><p className='pfos'>هودی</p></div>
           </div>
        </div>
    );
}

export default Categories;