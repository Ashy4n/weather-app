import Table from "./Table/Table"
import { useDispatch, useSelector } from "react-redux";
import { useRef} from "react"
import { historyActions } from "../../store";
import styles from './MultiTable.module.css'

const MutiTable = () => {
    const pageRef = useRef();
    const allQueries = useSelector(state => state.history.allQueries);
    const maxPage = Math.ceil(allQueries / 10);
    const dispatch = useDispatch();
    const pageNum = useSelector(state => state.history.pageNum)

    const pageUp = (event) => { 
    event.preventDefault();
    if (pageRef.current.value >= maxPage) { 
    pageRef.current.value = maxPage;
    return
    } 
    pageRef.current.value = parseInt(pageRef.current.value) + 1
    dispatch(historyActions.setPageNum(pageRef.current.value))
    }

    const pageDown = (event) => {
    event.preventDefault();
    if (pageRef.current.value <= 1) {
      pageRef.current.value = 1;
      return;
    }
    pageRef.current.value = parseInt(pageRef.current.value) - 1
    dispatch(historyActions.setPageNum(pageRef.current.value))
    }

    const changePage = (event) => { 
    event.preventDefault();
    if (pageRef.current.value < 1) {
      pageRef.current.value = 1;
      return;
    }
    if (pageRef.current.value > maxPage) { 
    pageRef.current.value = maxPage;
    return
    } 
    dispatch(historyActions.setPageNum(pageRef.current.value))
    }

 return(
     <div className={styles.container}>
         <div className={styles.tableContainer}>
             <Table/>
         </div> 
         <form className={ styles.formContainer}>
            <button onClick={pageDown}><i className="fa-solid fa-arrow-left"></i></button>
            <input defaultValue={pageNum} onChange={changePage} ref={pageRef} type="number" min={1} max={maxPage}></input>
            <button onClick={pageUp}><i className="fa-solid fa-arrow-right"></i></button>
        </form>
    </div>
 )
}
export default MutiTable