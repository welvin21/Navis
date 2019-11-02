import React,{ useState } from 'react';
import { Timeline, Icon, Row, Col } from 'antd';
import Documents from './Documents';
import Stats from './Stats';
// import Charts from './Charts';
// import { FirebaseStorage as storage } from '../constants/firebase';

const style = {
    container : {
        border : '0.5px solid #D8D8D8',
        borderRadius : 10, 
        height : '100%',
        display : 'grid',
    },
    card : {
        borderRadius : 10,
        margin : 10
    },
    timeline : {
        margin : 20,
        gridArea : 'timeline'
    },
    stats : {
        gridArea : 'stats'
    },
    document : {
        color : 'blue',
        textDecoration : 'underline',
    },
    details : {
        display : 'grid',
        gridTemplateAreas : 
        `
            'timeline stats'
            'timeline stats'
            'charts charts'
        `
    }
}

const TransactionDetails = (props) => {
    const { data } = props;
    const [visible,onModalClick] = useState(false);
    if(data === undefined){
        return (<div></div>);
    }else{
        return(
            <div>
                <Documents visible={visible} onModalClick={visible=>onModalClick(visible)}/>
                <div style={style.details}>
                    <Timeline style={style.timeline}>
                        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                            {data.shipmentDate}<br/>
                            Shipment date<br/>
                            <p onClick={()=>onModalClick(true)} style={style.document}>documents</p>
                        </Timeline.Item>
                        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                            3 Jan 2020<br/>
                            Goods arrived<br/>
                            <p onClick={()=>onModalClick(true)} style={style.document}>documents</p>
                        </Timeline.Item>
                        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                            {data.paymentDueDate}<br/>
                            Payment Due Date<br/>
                            <p onClick={()=>onModalClick(true)} style={style.document}>documents</p>
                        </Timeline.Item>
                        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                            {data.paymentDate}<br/> 
                            Payment Date<br/>
                            <p onClick={()=>onModalClick(true)} style={style.document}>documents</p>
                        </Timeline.Item>
                    </Timeline>
                    <Stats style={{gridArea : 'stats'}}/>
                    {/* <Charts style={{gridArea : 'charts'}}/> */}
                    
                </div>
            </div>
            
        )
    }
    
}

export default TransactionDetails;