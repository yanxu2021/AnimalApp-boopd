import React from 'react'
import b from "../components/images/b.png"
import o from "../components/images/o.png"
import o2 from "../components/images/o2.png"
import p from "../components/images/p.png"
import icon from "../components/images/icon.png"
import d from "../components/images/d.png"

export default function Boopd() {
    return (
        <div className="logoContainer">
            <div className="boopd-desktop">
                <img src={b} alt="b" className="b"/>
                <img src={o} alt="" className="o"/>
                <img src={o2} alt="o" className="o2"/>
                <img src={p} alt="p" className="p"/>
                <div className="iconContainer">
                <img src={icon} alt="icon" className="icon"/>
                </div>
                <img src={d} alt="d" className="d"/>
            </div>
        </div>
    )
}
