import React from "react"
import s from "./Paginator.module.css"
import arrow from "components/assets/images/paginator/arrow.svg"


let Paginator: React.FC<propsType> = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {

    let totalPageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= totalPageCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.section}>
            <span>{currentPage > 1 &&
                <button className={s.prev_btn} onClick={() => onPageChange('prev')}>
                    <img src={arrow} alt="arrow"/>
                </button>}
            </span>

            {pages.map(p => <div key={p}
                                 className={p === currentPage ? s.page_active : s.page}
                                 onClick={() => onPageChange(p)}>{p} </div>)}

            <span>
                {currentPage != pages.length &&
                    <button className={s.next_btn} onClick={() => onPageChange('next')}>
                        <img src={arrow} alt="arrow"/>
                    </button>}</span>
        </div>
    )
};

export default Paginator;


type propsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number | string) => void
    portionSize?: number
}