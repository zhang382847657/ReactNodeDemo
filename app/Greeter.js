/**
 * Created by zhouxin on 2018/2/5.
 */
//Greeter,js
import React, {Component} from "react";
import styles from './Greeter.css';
import { Button } from 'antd-mobile';


export default class Greeter extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Button>这里是一个按钮</Button>
                <div className = {styles.test}>3333</div>
            </div>

        );
    }
}




