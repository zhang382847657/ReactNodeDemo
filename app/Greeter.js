/**
 * Created by zhouxin on 2018/2/5.
 */
//Greeter,js
import React, {Component} from "react";
import config from "./config.json";
import styles from './Greeter.css';

export default class Greeter extends Component {
    render() {
        return (
            <div className={styles.root}>
                {config.greetText}
                <div className = {styles.test}>3333</div>
            </div>

        );
    }
}




