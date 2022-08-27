import React from "react";

const ServerInfo = () => {
    return (
        <div className="ui segment" style={{background: "rgba(255, 255 ,255, .8)"}}>
            <div className="ui header">
                Server Info
                <div className="ui fitted divider"></div>
            </div>
            <div className="ui segments">
                <div className="ui segment"  style={{background: "rgba(0, 0 ,0, .1)"}}>
                    <div className="ui header">
                        Patch Version
                    </div>
                    <p>
                        Chapter 13.2 Ash Vacuum
                    </p>
                </div>
                <div className="ui segment"  style={{background: "rgba(0, 0 ,0, .1)"}}>
                    <div className="ui header">
                        Rates
                    </div>
                    <div style={{padding: "4px 0px"}}>
                        <div className="ui green label"> 
                            Base EXP
                            <div className="detail">7x</div>
                        </div>
                        <span className="ui green label">
                            Job EXP
                            <div className="detail">7x</div>
                        </span>
                    </div>
                    <div style={{padding: "4px 0px"}}>
                        <span className="ui yellow label">
                            Item Drop
                            <div className="detail">7x</div>
                        </span>
                        <span className="ui yellow label">
                            Card Drop
                            <div className="detail">7x</div>
                        </span>
                    </div>
                    <div style={{padding: "4px 0px"}}>
                        <span className="ui red label">
                            MVP Card Drop
                            <div className="detail">1x</div>
                        </span>
                    </div>
                </div>
                <div className="ui segment"  style={{background: "rgba(0, 0 ,0, .1)"}}>
                    <div className="ui header">Services</div>
                    <h1 className="ui header">NINGUNA WEA! vayan a jugar a otro server si quieren healer o tp chupenlo ATTE el gm margatroid</h1>
                </div>

            </div>
        </div>
    );
};

export default ServerInfo;




