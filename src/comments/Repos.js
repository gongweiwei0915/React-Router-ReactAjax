/**
 * Created by Administrator on 2017/7/12.
 */
import React from 'react';
import {Link} from 'react-router';
export default class Repos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arrays:[
                {username:'react',repName:'reactJs'},
                {username:"react",repName:"react-router"},
                {username:"vue",repName:"vueJs"},
                {username:"vue",repName:"vue-router"}

            ]
        }
    }
    render(){
        let {arrays} = this.state;
        return(
            <div>
                <h2>Repos组件</h2>
                <ul>
                    {
                        arrays.map((item,index)=>{
                            return <li key={index}>
                                <Link to={`/repos/${item.username}/${item.repName}`}>{item.repName}</Link>
                            </li>
                        })
                    }
                </ul>
                {this.props.children}
            </div>

        )
    }
}
