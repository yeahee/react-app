import React, { Component } from 'react';

class TOC extends Component{
    render(){
        var lists = [];
        var data = this.props.data;
        for(var i=0; i<data.length; i++){
            lists.push(
                <li key={data[i].id}>
                    <a href={"/content/" + data[i].id}
                    data-id={data[i].id}
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}>
                        {data[i].title}
                    </a>
                </li>//e.target은 이벤트 발생 시 선택된 태그 가리킴, 'data-'로 시작하는 정보는 dataset에 있음

            //     <li key={data[i].id}>
            //     <a href={"/content/" + data[i].id}
            //     onClick={function(id, e){
            //         e.preventDefault();
            //         this.props.onChangePage(id);
            //     }.bind(this, data[i].id)}>
            //         {data[i].title}
            //     </a>
            //     </li>
            );
        } 
        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;