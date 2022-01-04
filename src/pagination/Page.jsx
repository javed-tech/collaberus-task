import React, { useState, useEffect } from "react";
import '../pagination/pagination.css'
import axios from 'axios'
import {RiDeleteBinLine} from 'react-icons/ri'
import {MdOutlineEditNote} from 'react-icons/md'
const Page = () => {
    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments ')
        .then(response => {
        console.log(response.data);
        SetPosts(response.data)
        });
        
     }, [])
    
    const [posts, SetPosts] = useState([]);
    const [postPerPage, SetPostPerPage] = useState(10);
    const [currentPage, SetCurrentPage] = useState(1);

    const [pageItem, SetPageItem] = useState({
        start: 0,
        end: postPerPage
    })

    const onPageChangeEvent = (start, end) => {
        SetPageItem({
            start: start,
            end: end
        })
    }

    const OnPerPostChangeEvent = (e) => {
        SetPostPerPage(e.target.value);
        SetCurrentPage(1);
    }

   

    const numOfPages = Math.ceil(posts.length / postPerPage);
    // console.log(numOfPages);

    const numOfButtons = [];
    for (let i = 1; i <= numOfPages; i++) {
        numOfButtons.push(i);
    }

    const prevPageClick = () => {
        if (currentPage === 1) {
            SetCurrentPage(currentPage);
        } else {
            SetCurrentPage(currentPage - 1);
        }
    }


    const nextPageClick = () => {
        if (currentPage === numOfButtons.length) {
            SetCurrentPage(currentPage);
        } else {
            SetCurrentPage(currentPage + 1);
        }
    }

    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);   

    useEffect(() => {
        let tempNumberOfButtons = [...arrOfCurrButtons]

        let dotsInitial = '...'
        let dotsLeft = '... '
        let dotsRight = ' ...'

        if (numOfButtons.length < 6) {
            tempNumberOfButtons = numOfButtons
        }

        else if (currentPage >= 1 && currentPage <= 3) {
            tempNumberOfButtons = [1, 2, 3, 4, dotsInitial, numOfButtons.length]
        }

        else if (currentPage === 4) {
            const sliced = numOfButtons.slice(0, 5)
            tempNumberOfButtons = [...sliced, dotsInitial, numOfButtons.length]
        }

        else if (currentPage > 4 && currentPage < numOfButtons.length - 2) {
            // from 5 to 8 -> (10 - 2)
            const sliced1 = numOfButtons.slice(currentPage - 2, currentPage)
            // sliced1 (5-2, 5) -> [4,5] 
            const sliced2 = numOfButtons.slice(currentPage, currentPage + 1)
            // sliced1 (5, 5+1) -> [6]
            tempNumberOfButtons = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numOfButtons.length])
            // [1, '...', 4, 5, 6, '...', 10]
        }

        else if (currentPage > numOfButtons.length - 3) {
            // > 7
            const sliced = numOfButtons.slice(numOfButtons.length - 4)
            // slice(10-4) 
            tempNumberOfButtons = ([1, dotsLeft, ...sliced])
        }

        else if (currentPage === dotsInitial) {
            // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3 
            // arrOfCurrButtons[3] = 4 + 1 = 5
            // or 
            // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
            // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
            SetCurrentPage(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1)
        }
        else if (currentPage === dotsRight) {
            SetCurrentPage(arrOfCurrButtons[3] + 2)
        }

        else if (currentPage === dotsLeft) {
            SetCurrentPage(arrOfCurrButtons[3] - 2)
        }

        setArrOfCurrButtons(tempNumberOfButtons);
        const value = currentPage * postPerPage;

        onPageChangeEvent(value - postPerPage, value)
    }, [currentPage, postPerPage, numOfPages]);

    return (
        <>
            <div className="container-fluid mt-5 mb-5 ">
            <input type="search" name="" id="search-field" placeholder="Search" />

                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                        <div className="card-body p-0">
                            

                            <div className="table-responsive">
                                <table className="table table-text-small mb-0">
                                    <thead className="thead-primary table-sorting">
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            posts.slice(pageItem.start, pageItem.end).map((data, index) => {
                                                return (
                                                    <tr key={data.id}>
                                                        <td>{data.id}</td>
                                                        <td>{data.name}</td> 
                                                        <td>{data.email}</td>
                                                        <td>{data.name}</td>
                                                        <td><MdOutlineEditNote style={{fontSize:"20px"}}/>&nbsp;<RiDeleteBinLine style={{fontSize:"18px"}}/></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                          <div className="table-filter-info">
                                
                                <div className="dt-pagination">
                                    <ul className="dt-pagination-ul">
                                        <li className={`dt-item ${currentPage === 1 ? 'disabled': ''}`}><a className="dt-link" onClick={prevPageClick}>Prev</a></li>
                                        {
                                            arrOfCurrButtons.map((data, index) => {
                                                return (
                                                    <li key={index} className={`dt-item ${currentPage === data ? 'active' : ''}`}><a className="dt-link" onClick={() => SetCurrentPage(data)}>{data}</a></li>
                                                )
                                            })
                                        }
                                        <li className={`dt-item ${currentPage === numOfButtons.length ? 'disabled': ''}`}><a className="dt-link" onClick={nextPageClick}>Next</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;